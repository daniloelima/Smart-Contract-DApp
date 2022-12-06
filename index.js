// 1. Declare global variable to store the smart contract instance
let TuringContract;

// 2. Set contract address and ABI
const tContract_Address = "0x5A0d3d4406ca9d5505aB0D41e9486Fe6053bcdE1";
const tContract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "address_map",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "already_voted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "check",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "codiname_map",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receptor_voto",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "qtd_sa_Turings",
				"type": "uint256"
			}
		],
		"name": "issueToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "receptor",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "qtd_sa_Turings",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);

    /* 3.1 Create instance of pet smart contract */
    TuringContract = new ethers.Contract(
      tContract_Address,
      tContract_ABI,
      signer
    );
  });
});


//
const voteButton = document.querySelector("#vote_button");


/* 5. realize a new vote */
const setNewVote = () => {
    /* 5.1 Get inputs from pet form */
    const receptor_Input = document.querySelector("#receiver");
    const qtd_sa_Turings_Input = document.querySelector("#turing");

    // 5.2 Getting values from the inputs
    receptorNome = receptor_Input.options[receptor_Input.selectedIndex].value;
    qtd_sa_Turings = String(Number(qtd_sa_Turings_Input.value)*10**18);

    console.log("Receptor:", receptorNome, "Qtd:", qtd_sa_Turings);
    /* 5.3 Call the contract and reset */
    TuringContract.vote(receptorNome, qtd_sa_Turings)
        .then(() => {
            receptor_Input.value = "Andre";
            qtd_sa_Turings_Input.value = "";
            alert("Processando Voto...");
        })
        .catch((err) => {
            alert("Error voting" + err.message);
        });
};

/* Function to set pet details on click of button */
voteButton.addEventListener("click", setNewVote);

/* 5. realize a new vote */
const setIssueToken = () => {
    /* 5.1 Get inputs from pet form */
    const receptor_Input = document.querySelector("#receiverIssueToken");
    const qtd_sa_Turings_Input = document.querySelector("#turingIssueToken");

    // 5.2 Getting values from the inputs
    receptorNome = receptor_Input.options[receptor_Input.selectedIndex].value;
    qtd_sa_Turings = String(Number(qtd_sa_Turings_Input.value)*10**18);

    qtd_sa_Turings = "10";
    console.log("Receptor:", receptorNome, "Qtd:", qtd_sa_Turings);
    /* 5.3 Call the contract and reset */
    TuringContract.vote(receptorNome, qtd_sa_Turings)
        .then(() => {
            receptor_Input.value = "Andre";
            qtd_sa_Turings_Input.value = "";
            alert("Processando Voto...");
        })
        .catch((err) => {
            alert("Error voting" + err.message);
        });
};

// /* 6. Function to get pet details */
// const getCurrentPet = async () => {
//   setPetButton.value = "Getting Pet...";

//   /* 6.1 Get pet details from smart contract */
//   const pet = await TuringContract.getPet();

//   /* 6.2 Display the pet details section 
//   and
//   Hide the pet form in the DOM */
//   petSection.style.display = "block";
//   petFormSection.style.display = "none";

//   /* 6.3 Pet is an array of 3 strings [petName, petOwner, petAge] */ // ARRAY TA NA ORDEM -> AGE, NAME, OWNER
  
//   const petName = pet[1];
//   const petOwner = pet[2];
//   const petAge = pet[0];

//   /* 6.4 Display pet details in DOM */
//   document.querySelector(".pet-detail-name").innerText = petName;
//   document.querySelector(".pet-detail-owner").innerText = petOwner;
//   document.querySelector(".pet-detail-age").innerText = petAge;
// };

// /* 7. Function to show the pet form on click of button */
// showPetFormBtn.addEventListener("click", () => {
//   petSection.style.display = "none";
//   petFormSection.style.display = "block";
//   setPetButton.value = "Submit";
// });

// /* 8. Function to refresh pet details */
// refreshBtn.addEventListener("click", (e) => {
//   e.target.innerText = "Refreshing...";
//   getCurrentPet().then(() => {
//     e.target.innerText = "Refreshed";
//     setTimeout(() => {
//       e.target.innerText = "Refresh";
//     }, 2000);
//   });
// });