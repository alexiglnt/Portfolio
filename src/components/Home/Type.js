import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  // 👇 récupère le tableau de chaînes dans la langue active
  const strings = t("typewriter.lines", { returnObjects: true });

  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
