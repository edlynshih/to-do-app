const StatusDisplay = ({ status }) => {

  const getColor = (status) => {
    let color;
    switch (status) {
      case 'Done':
        color = '#00CC6F';
        break;
      case 'Working on it':
        color = '#FFAC1C';
        break;
      case 'Stuck':
        color = '#FB275D';
        break;
      default:
        color = '#ECEFF8'
    }
    return color;
  }

  return (
    <div className="status-display" style={{ backgroundColor: getColor(status) }}>
      {status}
    </div>
  )
}

export default StatusDisplay;