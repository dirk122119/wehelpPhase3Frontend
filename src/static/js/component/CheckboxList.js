import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function CheckBoxList(props) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (valueIndex) => () => {
    const currentIndex = checked.indexOf(valueIndex);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(valueIndex);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function handleDeleteBtn(index){
    alert("delete")
    props.todos.splice(index,1)
    console.log(props.todos)
    props.handleDeleteBtn(props.todos)
  }
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      { 
        props.todos.map((value,index) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={()=>
                handleDeleteBtn(index)
              }>
                <DeleteForeverIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText sx={(checked.indexOf(index) !== -1)?{textDecoration: 'line-through'}:{textDecoration: 'none'}}id={labelId} primary={`Task ${index+1} : ${value} `} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export { CheckBoxList };
