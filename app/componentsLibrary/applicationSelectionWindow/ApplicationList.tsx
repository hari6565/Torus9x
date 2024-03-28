import { Button, CircularProgress } from "@nextui-org/react";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setApplicationName, setFabric } from "@/app/utilsFunctions/Store/Reducers/MainSlice";

const FabricList = ({ fabric , searchInput}) => {
  const { fabrics, applications } = fabric;
  const dispatch = useDispatch();

  const handleSetApplication = (application , fabrics) => {
    console.log(fabrics , "dshjbdhud");
    
    dispatch(setApplicationName(application));
    dispatch(setFabric(fabrics));
  };

  return (
    <div className="my-2">
      <h2 className="font-bold text-center w-full bg-gray-200">{fabrics} Applications</h2>
      <div className="flex flex-wrap py-4 px-5 gap-4 w-full justify-center">
        {applications.length > 0 ? (
          applications
            .filter((ele) => ele.toLowerCase().includes(searchInput.toLowerCase()))
            .map((application, id) => (
              <div className="justify-center items-center" key={id}>
                <Button
                  size="sm"
                  variant="bordered"
                  color="primary"
                  className="gap-1 text-black h-16 text-lg"
                  onClick={() => handleSetApplication(application , fabrics)}
                >
                  <div className="flex flex-col items-center justify-center text-xs">
                    <FaRegFileAlt className="text-black w-8 h-8" />
                    {application}
                  </div>
                </Button>
              </div>
            ))
        ) : (
          <CircularProgress size="md" aria-label="loading" />
        )}
      </div>
    </div>
  );
};

export default FabricList;