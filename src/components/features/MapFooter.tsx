"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const MapFooter = () => {
  return (
    <div className="w-full rounded-lg">
      <YMaps>
        <Map
          height="400px"
          width="100%"
          defaultState={{ center: [61.248894, 73.398943], zoom: 16 }}
        >
          <Placemark defaultGeometry={[61.248894, 73.398943]} />
        </Map>
      </YMaps>
    </div>
  );
};
