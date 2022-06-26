import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransitionGroup } from "react-transition-group";

const DATA = [1, 2, 3, 4, 5, 6];
function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function TransitionGroupExample() {
  const [currentTextField, setCurrentTextField] = React.useState(
    DATA.slice(0, 3)
  );

  const handleAddFruit = () => {
    const nextHiddenItem = DATA.find((i) => !currentTextField.includes(i));
    if (nextHiddenItem) {
      setCurrentTextField((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setCurrentTextField((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={currentTextField.length >= DATA.length}
      onClick={handleAddFruit}
    >
      Add fruit to basket
    </Button>
  );

  return (
    <div>
      {addFruitButton}
      <Box sx={{ mt: 1 }}>
        <List>
          <TransitionGroup>
            {currentTextField.map((item) => (
              <Collapse key={item}>
                {renderItem({ item, handleRemoveFruit })}
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      </Box>
    </div>
  );
}
