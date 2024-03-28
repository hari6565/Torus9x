import { Button, CircularProgress, Divider, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoIosSearch, IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setApplicationName } from "@/app/utilsFunctions/Store/Reducers/MainSlice";
import axios from "axios";
import FabricList from "./ApplicationList";

const ApplicationSelector = () => {
  const [loginApplications, setLoginApplications] = useState([]);
  const [appInput, setAppInput] = useState(false);
  const [application, setApplication] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const getAllApplications = async () => {
    try {
      const response = await axios.get("http://192.168.2.89:3001/fabricsList/?tenant=TORUS&appGroup=Group-1");
      if (response && response.status === 200) {
        setLoginApplications(response.data);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  const handleSetApplication = () => {
    dispatch(setApplicationName(application));
    setAppInput(false);
    router.push("/");
  };

  return (
    <div className="overflow-y-scroll">
      <div className="flex items-center">
      <Input
        className="w-72 my-2 ml-2"
        type="text"
        size="sm"
        value={searchInput}
        style={{ border: "none", boxShadow: "none" }}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
        startContent={<IoIosSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
      />
      {/* <div className="w-1/2 text-center font-bold">Select Application</div> */}
      </div>
      <Divider />
      {loginApplications.length > 0 ? (
        loginApplications.map((fabric, index) => <FabricList key={index} fabric={fabric} searchInput={searchInput}/>)
      ) : (
        <CircularProgress size="md" aria-label="loading" />
      )}
      <div>
        {appInput ? (
          <div>
            <Input
              type="text"
              style={{ border: "none", boxShadow: "none" }}
              onChange={(e) => setApplication(e.target.value)}
              className="border-2 rounded-lg"
            />
            <Button className="bg-blue-500 text-white rounded px-3 mx-7 my-3" onClick={handleSetApplication}>
              Create Application
            </Button>
          </div>
        ) : (
          <div className="flex w-full justify-center ">
          <Button onClick={() => setAppInput(true)} className="flex gap-2">
            <IoIosAddCircle size={20} />
            <h2>Create An Application</h2>
          </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationSelector;