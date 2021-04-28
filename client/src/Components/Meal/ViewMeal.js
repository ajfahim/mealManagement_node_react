import { React, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export default function ViewMeal({ userData }) {
  const [preferenceData, setPreferenceData] = useState([]);

  useEffect(async () => {
    async function getData() {
      const response = await axios.get("http://localhost:5000/api/meal", {
        withCredentials: true,
      });
      setPreferenceData(response.data);
    }
    getData();
  }, []);

  const columns = [
    {
      name: "name",
      label: "User Name",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "breakfast",
      label: "Breakfast",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lunch",
      label: "Lunch",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "dinner",
      label: "Dinner",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <div>
      {preferenceData.length > 0 ? (
        <MUIDataTable
          title={"Preferences"}
          data={preferenceData}
          columns={columns}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
