import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { isAdminAuthenticated } from "@/lib/auth";
import { createBlog, getAllBlogs } from "@/lib/blogs";
import { BlogCategory } from "@/lib/types";

const ALLOWED_CATEGORIES: BlogCategory[] = [
  "Mental Health",
  "Anxiety",
  "Relationships",
  "Mindfulness",
  "Self Growth",
];

export async function GET() {
  try {
    const blogs = await getAllBlogs();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      {
        error:
          "Could not connect to MongoDB. Check MONGODB_URI in .env.local and make sure MongoDB is running.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const title = String(formData.get("title") || "").trim();
    const category = String(formData.get("category") || "").trim() as BlogCategory;
    const excerpt = String(formData.get("excerpt") || "").trim();
    const content = String(formData.get("content") || "").trim();
    const author = String(formData.get("author") || "Admin").trim();
    const imageFile = formData.get("image");

    if (!title || !category || !excerpt || !content) {
      return NextResponse.json(
        { error: "Title, category, excerpt, and content are required." },
        { status: 400 }
      );
    }

    if (!ALLOWED_CATEGORIES.includes(category)) {
      return NextResponse.json({ error: "Invalid category." }, { status: 400 });
    }

    if (!(imageFile instanceof File) || imageFile.size === 0) {
      return NextResponse.json(
        { error: "Featured image is required." },
        { status: 400 }
      );
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(imageFile.type)) {
      return NextResponse.json(
        { error: "Image must be JPG, PNG, WEBP, or GIF." },
        { status: 400 }
      );
    }

    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image must be under 5MB." },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });

    const ext = imageFile.name.split(".").pop()?.toLowerCase() || "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    await fs.writeFile(path.join(uploadsDir, filename), buffer);

    const blog = await createBlog({
      title,
      category,
      excerpt,
      content,
      author,
      image: `/uploads/${filename}`,
    });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to save blog. Check MongoDB connection (MONGODB_URI) and try again.",
      },
      { status: 500 }
    );
  }
}
