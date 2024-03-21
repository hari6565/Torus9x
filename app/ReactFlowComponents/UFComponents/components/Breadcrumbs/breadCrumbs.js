import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const CustomBreadcrumbs = ({ items, currentPage, setCurrentPage, props, styles, events, functions }) => {
    return (
        <div style={{ height: "100%" }}>
            <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(key)} {...props} {...events}>
                {items.map((item) => (
                    <BreadcrumbItem key={item.key} isCurrent={currentPage === item.key}>
                        {item.label}
                    </BreadcrumbItem>
                ))}
            </Breadcrumbs>
        </div>
    );
};

export default CustomBreadcrumbs;

