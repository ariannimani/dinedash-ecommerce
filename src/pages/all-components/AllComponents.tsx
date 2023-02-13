import React from "react";
import {
  Button,
  FilterButton,
  IconButton,
  LinkButton,
  ToggleButton,
  PopularButton,
} from "components/buttons";
import Price from "components/elements/price/Price";
import { Input, Search, SelectOption, TextArea } from "components/inputs";
import { BsCreditCard } from "react-icons/bs";
import { SlSocialGoogle } from "react-icons/sl";
import { MdOutlineDone, MdArrowBackIos } from "react-icons/md";
import { FiFacebook, FiArrowRight, FiMenu } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Tag } from "components/elements";

const AllComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginLeft: "50px",
      }}
    >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "50px",
        }}
      >
        <Input title="Name" type="text" placeholder="Name" disabled />
        <TextArea
          title="Additional info (opt.)"
          placeholder="Additional info (opt.)"
        />
        <Input type="date" />
        <Input type="text" placeholder="Address" />
        <SelectOption
          options={[
            { id: 1, value: "test" },
            { id: 2, value: "test1" },
          ]}
          value="Select"
          onChange={() => {}}
        />
        <Search
          type="search"
          placeholder="Search"
          icon={<FaSearch color="#ccc" />}
        />
        <Search
          type="search"
          placeholder="Address"
          icon={<IoLocationOutline color="#ccc" />}
        />
        <Search
          type="searchWithButton"
          placeholder="Address"
          icon={<IoLocationOutline color="#ccc" />}
        />
        <ToggleButton onToggle={() => {}} />
        <FilterButton type="filter">Restaurants</FilterButton>
        <FilterButton type="filterWithIcon" icon={<FiMenu />}>
          All
        </FilterButton>
        <PopularButton type="popular"> Popular</PopularButton>
        <PopularButton type="popularActive">Popular</PopularButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginLeft: "50px",
        }}
      >
        <Price type="primary">$5</Price>
        <Price type="secondary">$4</Price>
        <Tag type="primary">5.0</Tag>
        <Tag type="secondary">4.5</Tag>
        <Tag type="primary" size="small">
          5.0
        </Tag>
        <Tag type="secondary" size="small">
          4.5
        </Tag>
        <Tag type="secondary" size="small" variant="clock">
          20-30 minutes
        </Tag>
      </div>
    </div>
  );
};

export default AllComponents;
