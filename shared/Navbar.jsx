"use client";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Drawer, Button, Select, DatePicker, TimePicker, Input, Form, message } from "antd";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
const { Option } = Select;
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (values) => {
    console.log("Form Values:", values);

    const params = {
      email: values.email,
      date: values.date ? values.date.format("YYYY-MM-DD") : "",
      time: values.time ? values.time.format("HH:mm A") : "",
      people: values.people,
      bookTour: values.bookTour,
      tourTime: values.tourTime,
    };

    const serviceID = "service_bysglsk";
    const templateID = "template_fmb0lyx";
    const publicKey = "FLH926emlbCK5y5vl";

    emailjs
      .send(serviceID, templateID, params, publicKey)
      .then((res) => {
        console.log(res);
        message.success("Your reservation has been sent successfully!");
        form.resetFields();
        closeDrawer();
        setTimeout(() => {
          router.push("/");
        }, 2000); 
      })
      .catch((err) => {
        console.error(err);
        message.error("Failed to send reservation. Please try again.");
      });
  };


  return (
    <div className="h-[100px] w-full bg-[#E7F9CF] fixed top-0 z-50 flex items-center">
      <Wrapper>
        <div className="flex justify-between items-center md:px-[50px] w-full">
          <Link href="/">
            <Image src="/images/logo.svg" width={139} height={139} alt="logo" />
          </Link>

          <ul className="hidden md:flex justify-between items-center w-[50%]">
            <Link href="/" className="text-xl text-[#727272] bebas">Home</Link>
            <Link href="/about" className="text-xl text-[#727272] bebas">About</Link>
            <Link href="/menu" className="text-xl text-[#727272] bebas">Menu</Link>
            <Link href="/sustainability" className="text-xl text-[#727272] bebas">Sustainability</Link>
            <Link href="/references" className="text-xl text-[#727272] bebas">References</Link>
          </ul>

          <Button className="!hidden md:!block !text-white !w-[161px] !h-[50px] !bg-[#80CC28] !text-[17px]" onClick={showDrawer}>
            Reservations
          </Button>

          <div className="md:hidden mr-3">
            {menuOpen ? (
              <CloseOutlined className="text-2xl" onClick={() => setMenuOpen(false)} />
            ) : (
              <MenuOutlined className="text-2xl" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#E7F9CF] shadow-md z-50">
            <ul className="flex flex-col items-center gap-4 py-4">
              <Link onClick={closeMenu} href="/" className="text-xl text-[#727272] bebas">Home</Link>
              <Link onClick={closeMenu} href="/about" className="text-xl text-[#727272] bebas">About</Link>
              <Link onClick={closeMenu} href="/menu" className="text-xl text-[#727272] bebas">Menu</Link>
              <Link onClick={closeMenu} href="/sustainability" className="text-xl text-[#727272] bebas">Sustainability</Link>
              <Link onClick={closeMenu} href="/references" className="text-xl text-[#727272] bebas">References</Link>
              <Button className="!text-white !w-[161px] !h-[50px] !bg-[#80CC28] !text-[17px]" onClick={showDrawer}>
                Reservations
              </Button>
            </ul>
          </div>
        )}
        <Drawer
          title="Reservations"
          placement="top"
          closable={true}
          onClose={closeDrawer}
          open={open}
          className="custom_drawer"
        >
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name="people" label="Number of People" rules={[{ required: true }]}>
              <Select placeholder="Select number of people">
                {Array.from({ length: 10 }, (_, i) => (
                  <Option key={i + 1} value={i + 1}>
                    {i + 1}
                  </Option>
                ))}
                <Option value="11+">11+</Option>
              </Select>
            </Form.Item>

            <Form.Item name="date" label="Date" rules={[{ required: true }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
              <TimePicker format="h:mm A" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item name="bookTour" label="Would you like to book a tour?" rules={[{ required: true }]}>
              <Select placeholder="Select an option">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
            </Form.Item>

            <Form.Item name="tourTime" label="Tour Booking Time" rules={[{ required: true }]}>
              <Select placeholder="Select a time slot">
                {(() => {
                  let times = [];
                  for (let hour = 8; hour <= 23; hour++) {
                    ["30", "00"].forEach((minute) => {
                      let formattedHour = hour > 12 ? hour - 12 : hour;
                      let period = hour >= 12 ? "PM" : "AM";
                      times.push(
                        <Option key={`${formattedHour}:${minute} ${period}`} value={`${formattedHour}:${minute} ${period}`}>
                          {`${formattedHour}:${minute} ${period}`}
                        </Option>
                      );
                    });
                  }
                  return times;
                })()}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button className="!bg-[#A1C96A] !text-white" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Wrapper>
    </div>
  );
};

export default Navbar;
