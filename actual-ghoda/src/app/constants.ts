export const CONTRACT_ADDRESS = "0xf8b3d0010b7d4f6fa1b3f383002d9396d9fade4c";
export const ABI = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "horseId",
        type: "int256",
      },
    ],
    name: "addRaceHorse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "int256",
        name: "horseId",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "bidOnHorse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "id",
            type: "int256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "int256",
            name: "speed",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "acceleration",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "agility",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "stamina",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "strength",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "rarity",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "theta",
            type: "int256",
          },
        ],
        internalType: "struct horsey.Horse",
        name: "newHorse",
        type: "tuple",
      },
    ],
    name: "breedOrExhaustHorse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "id",
            type: "int256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "int256",
            name: "speed",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "acceleration",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "agility",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "stamina",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "strength",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "rarity",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "theta",
            type: "int256",
          },
        ],
        internalType: "struct horsey.Horse",
        name: "horse",
        type: "tuple",
      },
    ],
    name: "initialiseHorse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "timestamp",
        type: "string",
      },
    ],
    name: "initialiseRace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "horses",
    outputs: [
      {
        internalType: "int256",
        name: "id",
        type: "int256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "int256",
        name: "speed",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "acceleration",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "agility",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "stamina",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "strength",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "rarity",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "theta",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "race",
    outputs: [
      {
        internalType: "string",
        name: "timestamp",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
