"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Code,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Kbd,
  Tabs,
  Tab,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";

import logo from "@/app/assets/logo.ico";
import Image from "next/image";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { LiaComments } from "react-icons/lia";
import { GrBug } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { RiShareBoxFill } from "react-icons/ri";
import { MdPreview } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { RiFeedbackLine } from "react-icons/ri";
import { LiaYoutubeSquare } from "react-icons/lia";
import { CgRedo } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { writeReddis } from "@/app/utilsFunctions/apiCallUnit";
import { useRouter } from "next/navigation";
import { VscPreview } from "react-icons/vsc";
import useAuth from "@/app/utilsFunctions/keyCloak/useAuth";
import { Decode } from "../../utilsFunctions/lib/decode";

export default function Topbar({ sideState, tenet, handleLogout }: any) {
  const navigate = useRouter();
  const disPatch = useDispatch();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [open, setopen] = useState(false);
  const [veropen, versetopen] = useState(false);
  const UFAppNVersion = useSelector(
    (state: any) => state.UFStates.UFAppNVersion
  );

  const allUFNode = useSelector((state: any) => state.UFStates.allUFNode);

  const settoggle = async () => {
    try {
      const Data = {
        [UFAppNVersion.appName]: {
          [UFAppNVersion.Version]: {
            nodes: allUFNode,
            // edges,
            width: window.innerWidth,
            height: window.innerHeight,
          },
        },
      };
      console.log(JSON.stringify(Data));
      const res = await writeReddis("testUI", Data);
    } catch (err) {
      alert("error");
      return;
    }
    // return;
    navigate.push("/Builder");
  };
  return (
    <div className="shadow-lg shadow-violet-100 hover:bg-violet-100">
      <Navbar isBordered className="h-11 ">
        <NavbarBrand
          as={Link}
          href="https://www.gsstvl.com"
          className=" -ml-44"
        >
          <Image className=" w-8 h-8  transition-all" src={logo} alt=""></Image>
          <p className="font-bold text-inherit text-black">Torus</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Help Menu"}
              color="secondary"
            >
              <Link onPress={() => setopen(true)}>
                <AiOutlineQuestionCircle className="w-6 h-6 text-black" />
              </Link>
            </Tooltip>
            <Modal size={"sm"} isOpen={open} onOpenChange={setopen}>
              <ModalContent>
                <div className="p-3">
                  <h1 className="font-bold">Need Help?</h1>
                  <h1 className="text-sm">
                    We value user feedback and want to help.
                  </h1>
                  <Divider className="my-2" />
                  <h1>Torus Community</h1>
                  <div className="flex justify-start gap-7">
                    <RiFeedbackLine className="w-6 h-6" />
                    <h1>Feedback</h1>
                  </div>
                  <div className="flex justify-start gap-7 my-4">
                    <GrBug className="w-6 h-6" />
                    <h1>Bug Report</h1>
                  </div>
                  <div className="flex justify-start gap-7 my-4">
                    <LiaYoutubeSquare className="w-6 h-6" />
                    <h1>Tutorials</h1>
                  </div>
                  <div className="flex justify-start gap-7 my-4">
                    <AiOutlineQuestionCircle className="w-6 h-6" />
                    <h1>FAQs & Docs</h1>
                  </div>
                  <div className="flex justify-start gap-7 my-4">
                    <AiOutlineQuestionCircle className="w-6 h-6" />
                    <h1>Current status/ Known issues</h1>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </NavbarItem>
          <NavbarItem isActive>
            <Tooltip
              placement={"bottom"}
              content={"Keyboard Shortcuts"}
              color="secondary"
            >
              <Link onPress={onOpen}>
                <MdOutlineKeyboardCommandKey className="w-6 h-6  text-black" />
              </Link>
            </Tooltip>
            <Modal size={"xs"} isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader>Icon Keyboard palette</ModalHeader>
                <ModalBody>
                  <h1>General</h1>
                  <div>
                    <h1 className="flex justify-between">
                      Command Palette
                      <Kbd>ctrl + K</Kbd>
                    </h1>
                    <h1 className="flex justify-between my-3">
                      Cut Widget
                      <Kbd>ctrl + X</Kbd>
                    </h1>
                    <h1 className="flex justify-between my-3">
                      Copy Widget
                      <Kbd>ctrl + C</Kbd>
                    </h1>
                    <h1 className="flex justify-between my-3">
                      Duplicate Widget
                      <Kbd>ctrl + D</Kbd>
                    </h1>
                    <h1 className="flex justify-between my-3">
                      Paste Widget
                      <Kbd>ctrl + V</Kbd>
                    </h1>
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </NavbarItem>
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"Command Palette"}
              color="secondary"
            >
              <Link>
                <IoSearchSharp className="w-6 h-6  text-black" />
              </Link>
            </Tooltip>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="">
          <NavbarItem>
            <div>
              <Input
                variant="bordered"
                key=""
                name="AppName"
                label="AppName"
                description=""
                className=" w-32 h-5 -my-5"
              />
            </div>
          </NavbarItem>
          <NavbarItem>
            <Tooltip
              placement={"bottom"}
              content={"It's been 28 days since you last saved a new version."}
              color="secondary"
            >
              <Dropdown>
                <DropdownTrigger>
                  <Link className=" text-black">
                    <CgRedo className="w-7 h-7 " />
                    v1
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">App 1</DropdownItem>
                  <DropdownItem key="copy">App 2</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Tooltip>
          </NavbarItem>

          <div className="hover:border-1 hover:rounded-xl ">
            <NavbarItem>
              <Tooltip
                placement={"bottom"}
                content={"Comments"}
                color="secondary"
              >
                <Link>
                  <FcOk className="w-6 h-6 " />
                  <LiaComments className="w-6 h-6  text-black" />
                </Link>
              </Tooltip>
            </NavbarItem>
          </div>
          <div className="hover:border-1 hover:rounded-xl ">
            <NavbarItem>
              <Tooltip
                placement={"bottom"}
                content={"Project Issues"}
                color="secondary"
              >
                <Link>
                  <FcOk className="w-6 h-6" />
                  <GrBug className="w-5 h-5  text-black" />
                </Link>
              </Tooltip>
            </NavbarItem>
          </div>
          <div className="hover:border-1 hover:rounded-md ">
            <NavbarItem>
              <Tooltip
                placement={"bottom"}
                content={"Dveloper Menu"}
                color="secondary"
              >
                <Link>
                  <FaCode className="w-6 h-6  text-black" />
                </Link>
              </Tooltip>
            </NavbarItem>
          </div>
          <div className="hover:border-1 hover:rounded-md ">
            <NavbarItem>
              <Tooltip
                placement={"bottom"}
                content={"Project Share"}
                color="secondary"
              >
                <Link>
                  <RiShareBoxFill className="w-6 h-6  text-black" />
                </Link>
              </Tooltip>
            </NavbarItem>
          </div>
          <NavbarItem>
            <Tooltip placement="bottom" content="Preview App" color="secondary">
              <Button
                className=" bg-white "
                isDisabled={
                  sideState == "firestore" || sideState == "storyboard"
                    ? true
                    : false
                }
              >
                <MdPreview className="w-8 h-8 text-orange-600 " />
              </Button>
            </Tooltip>
          </NavbarItem>

          <NavbarItem>
            <Button
              size="sm"
              onClick={settoggle}
              className="bg-black text-white"
            >
              <VscPreview color="white" size={20} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              size="sm"
              onClick={handleLogout}
              className="bg-black text-white"
            >
              LogOut
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button size="sm" onClick={() => console.log(tenet)}>
              show
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
