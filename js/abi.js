function get_abi() {
	return [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "timestamp",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string[]",
					"name": "answers",
					"type": "string[]"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "proof_of_stakeholder",
					"type": "string"
				}
			],
			"name": "Reply_event",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "check",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "get_replier_addresses",
			"outputs": [
				{
					"internalType": "address[]",
					"name": "",
					"type": "address[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "replier",
					"type": "address"
				}
			],
			"name": "get_reply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "string[]",
					"name": "",
					"type": "string[]"
				},
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
			"name": "get_root",
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
			"inputs": [],
			"name": "sd2887",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "time",
					"type": "uint256"
				},
				{
					"internalType": "string[]",
					"name": "answers",
					"type": "string[]"
				},
				{
					"internalType": "string",
					"name": "proof_of_stakeholder",
					"type": "string"
				}
			],
			"name": "set_reply",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "new_root",
					"type": "address"
				}
			],
			"name": "transfer_root",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	];
}