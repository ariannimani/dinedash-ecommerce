import React from "react";
import { Button, IconButton, LinkButton } from "components";
import { BsCreditCard } from "react-icons/bs";
import { SlSocialGoogle } from "react-icons/sl";
import { MdOutlineDone, MdArrowBackIos } from "react-icons/md";
import { FiFacebook, FiArrowRight } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AllComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginLeft: "50px",
      }}
    >
      <Button>Order now</Button>
      <Button type="baseMedium">Shop now</Button>
      <Button type="baseSmall">Save</Button>
      <Button type="baseWithIcon" icon={<BsCreditCard />}>
        Pay online
      </Button>
      <Button type="inverted">Order now</Button>
      <Button type="invertedMedium">Order now</Button>
      <Button type="invertedWithIcon" icon={<SlSocialGoogle />}>
        Google
      </Button>
      <IconButton type="base" icon={<MdOutlineDone />} />
      <IconButton type="logo" icon={<FiFacebook />} />
      <IconButton type="logoInverted" icon={<CgFileDocument />} />
      <IconButton type="increment" icon={<AiOutlinePlus />} />
      <IconButton type="decrement" icon={<AiOutlineMinus />} />
      <LinkButton type="forward" icon={<FiArrowRight />}>
        See all
      </LinkButton>
      <LinkButton type="back" icon={<MdArrowBackIos />}>
        Restaurants
      </LinkButton>
    </div>
  );
};

export default AllComponents;
