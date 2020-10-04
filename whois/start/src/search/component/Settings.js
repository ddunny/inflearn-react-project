import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { SettingFilled } from "@ant-design/icons";

/**
 *
 * @param {object} param
 * @param {()=>void} param.logout
 */
export default function Settings({ logout }) {
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={logout}> 
        logout
      </Menu.Item>
      {/* <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <Button shape="circle" icon={<SettingFilled />} />
      </Dropdown>
    </>
  );
}
