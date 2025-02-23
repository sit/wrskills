import { atom, map } from 'nanostores';

// Store for completed problems
export const completedProblems = atom<Set<string>>(new Set());

// Store for user progress
export const userProgress = map({
  currentLevel: 'iron',
  totalPoints: 0,
  topicProgress: {} as Record<string, {
    completed: number,
    total: number,
    lastAttempt: Date | null
  }>
});

// Helper functions to update progress
export function markProblemComplete(problemId: string, points: number) {
  completedProblems.set(new Set([...completedProblems.get(), problemId]));
  
  const current = userProgress.get();
  userProgress.setKey('totalPoints', current.totalPoints + points);
}

export function updateTopicProgress(topicId: string, completed: number, total: number) {
  userProgress.setKey('topicProgress', {
    ...userProgress.get().topicProgress,
    [topicId]: {
      completed,
      total,
      lastAttempt: new Date()
    }
  });
} 