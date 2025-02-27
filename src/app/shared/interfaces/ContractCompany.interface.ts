export interface ContractCompany {
  id: number;
  id_company: number;
  id_contract: number;
  deadline: Date;
  is_accepted: boolean;
  is_completed: boolean;
  progress: number;
  start_date?: Date;
}
