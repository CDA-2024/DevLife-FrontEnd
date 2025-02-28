export interface AcceptedContract {
  id: number;
  title: string;
  type: string;
  image_url: string;
  description: string;
  reward: number;
  difficulty_level: number;
  progress: number;
  startDate: Date;
  deadline: Date;
}