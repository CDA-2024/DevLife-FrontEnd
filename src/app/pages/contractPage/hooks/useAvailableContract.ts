import { useContractApi } from "../../../shared/hooks/contracts/useContractApi";
import { useContractCompanyApi } from "../../../shared/hooks/contracts/useContractCompanyApi";
import { contractAvailableParser } from "../utils/contractAvailableParser";

export const useAvailableContract = () => {
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

  const availableContracts = contractAvailableParser(
    contract,
    contractsCompany
  );

  return {
    availableContracts,
    loading: loadingContract || loadingCompany,
    error: errorContract || errorCompany,
  };
};
