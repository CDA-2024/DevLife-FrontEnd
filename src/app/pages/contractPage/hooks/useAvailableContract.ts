import { useContractApi } from "../../../shared/hooks/contracts/useContractApi";
import { useContractCompanyApi } from "../../../shared/hooks/contracts/useContractCompanyApi";
import { contractAvailableParser } from "../utils/contractAvailableParser";

export const useAvailableContract = () => {
  const {
    data: contract,
    loading: loadingContract,
    error: errorContract,
    fetchData: fetchContract
  } = useContractApi();

  const {
    data: contractsCompany,
    loading: loadingCompany,
    error: errorCompany,
    fetchData: fetchContractCompany
  } = useContractCompanyApi();

  const availableContracts = contractAvailableParser(
    contract,
    contractsCompany
  );

  const updateContracts = () => {
    fetchContract();
    fetchContractCompany();
  };


  return {
    availableContracts,
    updateContracts,
    loading: loadingContract || loadingCompany,
    error: errorContract || errorCompany,
  };
};
