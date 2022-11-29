import {
  Dialog,
  DialogContent,
  Box,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  dailogOpen: {
    borderRadius: "25px",
    padding: "20px",
    "& h5": {
      color: "black",
      fontSize: "17px",
      paddingBottom: "1rem",
    },
    "& .MuiDialog-paperWidthSm": {
      padding: "20px",
    },
  },
}));
const Item = styled(motion.div)`
  width: 100%
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

export default function Modal({
  openDeleteModal,
  setOpenDeleteModal,
  content,
}) {
  const classes = useStyles();
  console.log("content--", content);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  console.log("status---", status);
  return (
    <>
      <Dialog
        className={classes.dailogOpen}
        open={openDeleteModal}
        maxWidth="md"
        fullWidth
        onClose={() => setOpenDeleteModal(false)}
      >
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: "all" }}
              >
                <img src={content} alt={content} />
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Previous Project</Typography>
              <Typography>Project Name:ABC</Typography>
              <Typography>
                Project details:ghasdhj ahsdghj adhgas dgsadhj asdghj ashgdj
                ajshdghjasgdhjgsahj hsajkdhkjsa d asjkdh jkashd jkhsa djkhas
                jkdhkas dajshdk ahsdj jksadh jkasdjkahs dhs akjdhsad
                jkahsjkdhjksa dhjkas hdjkhasjkdjkashddmnsf jgsdfhjksa fjk asdjfh
                jksdhfjk hdsjf dsdhf akjhdfjk fjsahjkfhajksf jk
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>

        <Box
          align="center"
          style={{ marginLeft: "10px", padding: "5px 20px" }}
        ></Box>
      </Dialog>
    </>
  );
}
