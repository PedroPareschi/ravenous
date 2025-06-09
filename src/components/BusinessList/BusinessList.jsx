import React from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.BusinessList}>
      {businesses.length === 0 && <div style={{ flex: 1, minHeight: 200 }} />}
      {businesses.map((business) => (
        <Business business={business} key={business.id} />
      ))}
    </div>
  );
};

export default BusinessList;
