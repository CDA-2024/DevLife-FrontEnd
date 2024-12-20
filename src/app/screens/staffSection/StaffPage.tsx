import PageTabsSwitcher from "../../shared/components/app-tabs-switcher";

const StaffPage = () => {

     const tabs = [
       {
         label: "test1",
         value: "test1",
         content: <div>test1</div>,
       },
       {
         label: "test2",
         value: "test2",
         content: <div>test2</div>,
       },
       {
         label: "test3",
         value: "test3",
         content: <div>test3</div>,
       },
     ];

    return (
      <>
      <PageTabsSwitcher tabs={tabs}/>
      </>
    );

}

export default StaffPage;