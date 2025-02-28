import { useContractApi } from "../../../shared/hooks/contracts/useContractApi";
import { useContractCompanyApi } from "../../../shared/hooks/contracts/useContractCompanyApi";
import { contractParser } from "../utils/contractParser";

export const useContract = () => {
  const {
    data: contract,
    loading: loadingContract,
    error: errorContract,
  } = useContractApi();

  const {
    data: contractsCompany,
    loading: loadingCompany,
    error: errorCompany,
  } = useContractCompanyApi();

  const contracts = contractParser(contract, contractsCompany);

  return {
    contracts,
    loading: loadingContract || loadingCompany,
    error: errorContract || errorCompany,
  };
};
