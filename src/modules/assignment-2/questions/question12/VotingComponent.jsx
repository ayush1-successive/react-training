// Task-12

import { useEffect, useReducer, useState } from "react";

const voteReducer = (state, action) => {
  switch (action.type) {
    case "Nikhil":
      return { ...state, Nikhil: state.Nikhil + 1 };
    case "Sanskar":
      return { ...state, Sanskar: state.Sanskar + 1 };
    case "Vinay":
      return { ...state, Vinay: state.Vinay + 1 };
    case "Pranjhi":
      return { ...state, Pranjhi: state.Pranjhi + 1 };
    case "Somil":
      return { ...state, Somil: state.Somil + 1 };
    case "Raunak":
      return { ...state, Raunak: state.Raunak + 1 };
    case "Ayush":
      return { ...state, Ayush: state.Ayush + 1 };
    default:
      return state;
  }
};

const VotingComponent = () => {
  const tableStyle = {
    width: "60%",
    borderCollapse: "collapse",
    margin: "0 auto",
    fontSize: 20,
  };

  const tdLeftStyle = {
    width: "20%",
    textAlign: "left",
    padding: "8px",
  };

  const tdRightStyle = {
    width: "20%",
    textAlign: "right",
    padding: "8px",
  };

  const candidateList = {
    Nikhil: 0,
    Sanskar: 0,
    Vinay: 0,
    Pranjhi: 0,
    Somil: 0,
    Raunak: 0,
    Ayush: 0,
  };

  const [bestCandidate, setBestCandidate] = useState(["-", 0]);
  const [candidates, dispatch] = useReducer(voteReducer, candidateList);

  useEffect(() => {
    Object.entries(candidates).forEach((candidate) => {
      if (candidate[1] > bestCandidate[1]) {
        setBestCandidate(candidate);
      }
    });
  }, [candidates, bestCandidate]);

  return (
    <>
      <h2>Elections for TEAM LEAD</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th
              style={{
                width: "20%",
                textAlign: "left",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Name
            </th>
            <th
              style={{
                width: "60%",
                textAlign: "left",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            ></th>
            <th
              style={{
                width: "20%",
                textAlign: "right",
                padding: "8px",
                backgroundColor: "#f2f2f2",
              }}
            >
              Votes
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(candidates).map((candidate, index) => (
            <tr key={index}>
              <td style={tdLeftStyle}>{candidate}</td>
              <td style={tdLeftStyle}>
                <button onClick={() => dispatch({ type: candidate })}>
                  <img
                    src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-add-vector-icon-png-image_470700.jpg"
                    alt="Remove from cart"
                    style={{ width: 30, height: 30 }}
                  />
                </button>
              </td>
              <td style={tdRightStyle}>{candidates[candidate]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>TEAM LEAD is {bestCandidate[0]}</h2>
    </>
  );
};

export default VotingComponent;
