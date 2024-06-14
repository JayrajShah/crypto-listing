"use client";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "@/utils/firebase";
import Image from "next/image";

type Props = {};
type ListItem = {
  last_price: number;
  one_day_change: number;
  image: string;
};

type List = {
  [key: string]: ListItem;
};

const Listing = (props: Props) => {
  const [hotListData, setHotListData] = useState<List | undefined>(undefined);

  useEffect(() => {
    const getHotList = async () => {
      const dbRef = ref(database, "hot_list");
      onValue(dbRef, (snapshot) => {
        if (!snapshot.exists()) return;
        let hotListData = snapshot.val();
        console.log(hotListData);
        setHotListData(hotListData);
      });
    };
    getHotList();
  }, []);

  return (
    <div>
      {!!hotListData &&
        Object.keys(hotListData)?.map((listItem) => (
          <>
            <div>{listItem}</div>

            <div>{hotListData[listItem]?.last_price}</div>

            <div>{hotListData[listItem]?.one_day_change}</div>

            <Image
              src={hotListData[listItem]?.image}
              width="100"
              height="100"
              alt="image"
            />
            <div>------------------------------------------</div>
          </>
        ))}
    </div>
  );
};

export default Listing;
