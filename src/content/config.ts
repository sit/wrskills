import { defineCollection, z } from 'astro:content';

// Define the problem difficulty levels
const difficultyEnum = z.enum([
  'iron',
  'bronze',
  'silver',
  'gold',
  'platinum',
  'emerald',
  'diamond',
  'master',
  'grandmaster',
  'challenger'
]);

// Define the roles
const roleEnum = z.enum([
  'top',
  'jungle',
  'mid',
  'adc',
  'support'
]);

// Define the champion types
const championTypeEnum = z.enum([
  'mage',
  'assassin',
  'bruiser',
  'tank',
  'marksman',
  'support'
]);

// Define the problems collection
const problems = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    difficulty: difficultyEnum,
    roles: z.array(roleEnum),
    championTypes: z.array(championTypeEnum),
    topics: z.array(z.string()),
    order: z.number(),
    published: z.boolean().default(true),
  })
});

// Define the topics collection
const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    requiredTopics: z.array(z.string()).optional(),
  })
});

export const collections = {
  problems,
  topics
}; 