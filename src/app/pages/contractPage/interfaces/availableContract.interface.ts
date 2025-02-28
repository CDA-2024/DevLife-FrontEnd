export interface AvailableContract {
  id: number;
  title: string;
  type: string;
  image_url: string;
  description: string;
  reward: number;
  difficulty_level: number;
  deadline: Date;
}