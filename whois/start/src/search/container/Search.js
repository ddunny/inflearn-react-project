import React from "react";
import { Row, Col, Typography } from "antd";
import Settings from "../component/Settings";
import SearchInput from "./SearchInput";

export default function Search() {
  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={()=>{}} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col>
          <Typography.Title>Search People!</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col span={12}>
          <SearchInput/>
        </Col>
      </Row>
    </>
  );
}
