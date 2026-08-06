import mongoose, { Schema, InferSchemaType } from "mongoose";

const BlogSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "Mental Health",
        "Anxiety",
        "Relationships",
        "Mindfulness",
        "Self Growth",
      ],
    },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true, default: "Admin" },
    readTime: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type BlogDocument = InferSchemaType<typeof BlogSchema> & {
  _id: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

// Ensure schema updates reload correctly in Next.js
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

export const Blog = mongoose.model("Blog", BlogSchema);
