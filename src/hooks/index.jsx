import React, { Fragment } from "react";

import { State } from "./State";
import { Effect } from "./Effect";
import { Context } from "./Context";
import { Ref } from "./Ref";
import { Reducer } from "./Reducer";
import { Memo } from "./Memo";
import { Callback } from "./Callback";
import { LayoutEffect } from "./LayoutEffect";

export const Hooks = () => {
  return (
    <Fragment>
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
    </Fragment>
  );
};
