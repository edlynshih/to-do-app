const DueDateDisplay = ({ duedate }) => {
   // Create a date object from a javaScript date string
   let date = new Date(duedate);

   // Get year, month, and day part from the date
   let year = date.toLocaleString("default", { year: "numeric" });
   let month = date.toLocaleString("default", { month: "2-digit" });
   let day = date.toLocaleString("default", { day: "2-digit" });
 
   // Generate yyyy-mm-dd date string
   let formattedDate = year + "-" + month + "-" + day;
  return (
    <div className="due-date-display">
      { formattedDate }
    </div>
  )
}

export default DueDateDisplay;