import { Types } from "mongoose";
import { connectDB } from "./mongodb";
import { Blog } from "@/models/Blog";
import { BlogInput, BlogPost } from "./types";

const LEGACY_CATEGORIES = ["Travel", "Tech", "Food", "Lifestyle", "Health"];

const SEED_BLOGS: Omit<BlogPost, "id" | "createdAt" | "updatedAt">[] = [
  {
    slug: "5-simple-habits-for-better-mental-health",
    title: "5 Simple Habits for Better Mental Health",
    category: "Mental Health",
    excerpt:
      "Small daily habits can protect your mind, reduce stress, and help you feel more balanced over time.",
    content: `Mental health is not only about therapy and big life changes. The everyday habits you practice can quietly shape how you think, feel, and cope with pressure.

## 1. Protect Your Sleep Routine

A consistent sleep schedule helps regulate mood, focus, and emotional control. Aim for a calm wind-down hour before bed and keep wake-up times steady, even on weekends.

## 2. Move Your Body Daily

Exercise is one of the most reliable natural mood boosters. A short walk, stretch session, or light workout can reduce tension and clear mental fog.

## 3. Limit Doomscrolling

Constant negative news and social comparison can raise anxiety. Set screen boundaries and replace late-night scrolling with something restorative.

## 4. Talk to Someone You Trust

Connection is a powerful buffer against loneliness and stress. Sharing what you feel does not make you weak — it keeps emotions from building up alone.

## Conclusion

Better mental health is built through small, repeatable choices. Start with one habit this week and give yourself time to grow into the rest.`,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&h=500&fit=crop",
    author: "Admin",
    readTime: "6 min read",
  },
  {
    slug: "how-to-calm-anxiety-in-under-10-minutes",
    title: "How to Calm Anxiety in Under 10 Minutes",
    category: "Anxiety",
    excerpt:
      "When anxiety spikes, these quick grounding techniques can help your body and mind settle faster.",
    content: `Anxiety can feel sudden and overwhelming. In those moments, your goal is not to solve every problem at once — it is to bring your nervous system back to a safer place.

## 1. Try Box Breathing

Inhale for 4 seconds, hold for 4, exhale for 4, and hold for 4. Repeat for a few cycles. This simple pattern signals safety to your body.

## 2. Use the 5-4-3-2-1 Grounding Method

Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. This pulls attention out of racing thoughts and into the present.

## 3. Release Muscle Tension

Tighten your shoulders, fists, or jaw for 5 seconds, then release. Progressive tension and release helps discharge anxious energy.

## Conclusion

Anxiety spikes are uncomfortable, but they are temporary. With practice, these short tools become easier to use when you need them most.`,
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900&h=500&fit=crop",
    author: "Admin",
    readTime: "5 min read",
  },
  {
    slug: "healthy-communication-tips-for-stronger-relationships",
    title: "Healthy Communication Tips for Stronger Relationships",
    category: "Relationships",
    excerpt:
      "Clear, kind communication is one of the strongest foundations for lasting relationships.",
    content: `Most relationship conflict is not only about what happened — it is about how people talk through what happened. Better communication can turn arguments into understanding.

## 1. Speak From Your Experience

Use “I feel” and “I need” statements instead of blame. This lowers defensiveness and keeps the conversation focused on solutions.

## 2. Listen to Understand, Not to Win

Pause before responding. Reflect back what you heard. Feeling understood often matters more than being right.

## 3. Repair Quickly After Conflict

Every relationship has tension. What matters is returning with honesty, accountability, and care after a hard moment.

## Conclusion

Healthy relationships are built in everyday conversations. Practice clarity, patience, and repair — and connection grows stronger over time.`,
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&h=500&fit=crop",
    author: "Admin",
    readTime: "5 min read",
  },
  {
    slug: "beginners-guide-to-mindfulness-meditation",
    title: "A Beginner’s Guide to Mindfulness Meditation",
    category: "Mindfulness",
    excerpt:
      "Mindfulness does not require hours of silence — just a few focused minutes can change how you respond to stress.",
    content: `Mindfulness is the practice of paying attention to the present moment without judgment. You do not need special equipment or a perfect quiet room to begin.

## 1. Start With Two Minutes

Sit comfortably, close your eyes if you like, and notice your breath. When your mind wanders, gently return to breathing. That return is the practice.

## 2. Bring Awareness Into Daily Life

Mindfulness is not only meditation. Try noticing the taste of your food, the feeling of walking, or one full breath before checking your phone.

## 3. Be Patient With Your Mind

Distraction is normal. The goal is not an empty mind — it is a kinder, steadier relationship with your thoughts.

## Conclusion

A few mindful minutes each day can reduce stress and improve focus. Start small, stay consistent, and let the benefits build naturally.`,
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=500&fit=crop",
    author: "Admin",
    readTime: "4 min read",
  },
  {
    slug: "how-to-build-self-confidence-step-by-step",
    title: "How to Build Self-Confidence Step by Step",
    category: "Self Growth",
    excerpt:
      "Confidence is not a personality trait you either have or don’t — it is a skill you can train.",
    content: `Self-confidence grows when your actions prove to yourself that you can handle challenges. Waiting to “feel ready” often keeps people stuck.

## 1. Keep Small Promises to Yourself

Choose one doable action each day and complete it. Reliability builds self-trust faster than motivational quotes.

## 2. Challenge Harsh Self-Talk

Notice when your inner critic exaggerates failure. Replace extreme thoughts with more balanced ones based on real evidence.

## 3. Take Comfortable Discomfort

Confidence expands at the edge of your comfort zone. Speak up in a meeting, try a new skill, or make the call you have been avoiding.

## Conclusion

Self-growth is gradual. Stack small wins, treat yourself with respect, and your confidence will follow your effort.`,
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&h=500&fit=crop",
    author: "Admin",
    readTime: "5 min read",
  },
];

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function toBlogPost(doc: {
  _id: Types.ObjectId;
  slug: string;
  title: string;
  category: BlogPost["category"];
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
}): BlogPost {
  return {
    id: String(doc._id),
    slug: doc.slug,
    title: doc.title,
    category: doc.category,
    excerpt: doc.excerpt,
    content: doc.content,
    image: doc.image,
    author: doc.author,
    readTime: doc.readTime,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

async function ensurePsychologyContent(): Promise<void> {
  // Clear old travel/tech/food seed content if still present
  await Blog.deleteMany({
    category: { $in: LEGACY_CATEGORIES },
  } as Record<string, unknown>);

  const count = await Blog.countDocuments();
  if (count > 0) return;

  const now = new Date();
  await Blog.insertMany(
    SEED_BLOGS.map((blog, index) => ({
      ...blog,
      createdAt: new Date(now.getTime() - index * 86400000),
      updatedAt: new Date(now.getTime() - index * 86400000),
    }))
  );
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  await connectDB();
  await ensurePsychologyContent();

  const docs = await Blog.find().sort({ createdAt: -1 }).lean();
  return docs.map((doc) =>
    toBlogPost({
      ...doc,
      _id: doc._id as Types.ObjectId,
      createdAt: doc.createdAt as Date,
      updatedAt: doc.updatedAt as Date,
    })
  );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  await connectDB();
  await ensurePsychologyContent();

  const doc = await Blog.findOne({ slug }).lean();
  if (!doc) return null;

  return toBlogPost({
    ...doc,
    _id: doc._id as Types.ObjectId,
    createdAt: doc.createdAt as Date,
    updatedAt: doc.updatedAt as Date,
  });
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  if (!Types.ObjectId.isValid(id)) return null;

  await connectDB();
  const doc = await Blog.findById(id).lean();
  if (!doc) return null;

  return toBlogPost({
    ...doc,
    _id: doc._id as Types.ObjectId,
    createdAt: doc.createdAt as Date,
    updatedAt: doc.updatedAt as Date,
  });
}

export async function createBlog(input: BlogInput): Promise<BlogPost> {
  await connectDB();

  let slug = slugify(input.title) || `post-${Date.now()}`;
  const existing = await Blog.findOne({ slug }).lean();
  if (existing) {
    slug = `${slug}-${Date.now()}`;
  }

  const doc = await Blog.create({
    slug,
    title: input.title.trim(),
    category: input.category,
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    image: input.image,
    author: input.author?.trim() || "Admin",
    readTime: input.readTime?.trim() || estimateReadTime(input.content),
  });

  return toBlogPost({
    _id: doc._id,
    slug: doc.slug,
    title: doc.title,
    category: doc.category,
    excerpt: doc.excerpt,
    content: doc.content,
    image: doc.image,
    author: doc.author,
    readTime: doc.readTime,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  });
}

export async function deleteBlog(id: string): Promise<boolean> {
  if (!Types.ObjectId.isValid(id)) return false;

  await connectDB();
  const result = await Blog.findByIdAndDelete(id);
  return Boolean(result);
}
