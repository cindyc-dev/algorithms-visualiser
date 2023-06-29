import React from "react";

export default function InputContainer() {
  return (
    <div className="grid">
      <div className="tabs ml-5">
        <a className="tab-active tab tab-bordered">Tab 1</a>
        <a className="tab">Tab 2</a>
        <a className="tab">Tab 3</a>
      </div>
      <div className="rounded-box flex flex-wrap items-center justify-center gap-2 overflow-x-hidden border border-base-300 p-4">
        test
      </div>
    </div>
  );
}
