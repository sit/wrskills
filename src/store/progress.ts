import { map } from 'nanostores';

// Load initial state from localStorage
const savedProgress = typeof localStorage !== 'undefined' 
  ? JSON.parse(localStorage.getItem('userProgress') || '{"currentLevel":"iron","topicProgress":{}}')
  : { currentLevel: 'iron', topicProgress: {} };

// Store for user progress
export const userProgress = map(savedProgress);

// Save to localStorage when store updates
userProgress.listen(state => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('userProgress', JSON.stringify(state));
  }
});

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