window.addEventListener('load', function() {
		if (typeof web3 !== 'undefined') {
			document.getElementById('metamaskbox').style.display='none';
			document.getElementById('overlay').style.visibility='visible';
			document.getElementById('belowoverlay').style.visibility='visible';
			document.getElementById('footer').style.visibility='visible';
			document.getElementById('chatscreen').style.visibility='visible';
			startApp(web3);
		} else {
		document.getElementById('metamaskbox').style.visibility='visible';
		}
	})

	const abi = [{
		"constant": true,
		"inputs": [],
		"name": "view28",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorGreen",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view70",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorYellow",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view36",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorBlack",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorGreen",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view64",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorTeal",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view50",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view66",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorBlue",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view34",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorYellow",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view44",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorWhite",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorOrange",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_message",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorTeal",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorPurple",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view42",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view24",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorBlue",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view60",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorWhite",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view56",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorRed",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorRed",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view30",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "colorLeaderboard",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorBlack",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorPurple",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view52",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "setColorPink",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorPink",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view22",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view38",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view40",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "changeColorOrange",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view58",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view68",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view62",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view26",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view32",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view54",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view48",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "view46",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myColorIs",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}]
	const contract_address = '0xdcfbe1f893640f018065fdb820eb68b501f8ec2d'
	const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
	const etherValue = web3.toWei(10, 'ether');
	var address = '0xdcfbe1f893640f018065fdb820eb68b501f8ec2d'

	web3.version.getNetwork((err, netId) => {
	  switch (netId) {
		case "1":
		  console.log('This is mainnet')
		  break
		case "2":
		  console.log('This is the deprecated Morden test network.')
		  break
		case "3":
		  console.log('This is the ropsten test network.')
		  break
		case "4":
		  console.log('This is the Rinkeby test network.')
		  break
		case "42":
		  console.log('This is the Kovan test network.')
		  break
		default:
		  console.log('This is an unknown network.')
	  }
	})

	var account = web3.eth.accounts[0];
	var accountInterval = setInterval(function() {
	  if (web3.eth.accounts[0] !== account) {
		account = web3.eth.accounts[0];
		location.reload();
	  }
	}, 100);

	function startApp(web3) {
		const eth = new Eth(web3.currentProvider)
		const token = eth.contract(abi).at(contract_address);
	}

	const myContract = web3.eth.contract(abi).at(contract_address);
	const registrationVar = setInterval(checkContributionStatus, 5000);
	
	document.getElementById('sendmsg').onkeydown = function(event) {
    if (event.keyCode == 13) {
        sendMessageFunction();
    }
	}
	
	function myscript(e,i){
		if(e.keycode == 13){
        
		}
	}
	
	document.getElementById('sendmsg').onkeydown = function(event) {
    if (event.keyCode == 13) {
        var getMessage = ('"' + document.getElementById('sendmsg').value + '"');
		myContract.sendMessage(getMessage, {from: account}, (err, result) => {
		});
    }
	}
	
	function checkContributionStatus () {
		myContract.colorLeaderboard({from: account}, (err, result) => {
		var myColor = (result[0] + 0) / 10;
		if (myColor > 0) {
		var redVar = document.getElementById('redCount');
		var orangeVar = document.getElementById('orangeCount');
		var yellowVar = document.getElementById('yellowCount');
		var greenVar = document.getElementById('greenCount');
		var blueVar = document.getElementById('blueCount');
		var tealVar = document.getElementById('tealCount');
		var purpleVar = document.getElementById('purpleCount');
		var pinkVar = document.getElementById('pinkCount');
		var blackVar = document.getElementById('blackCount');
		var whiteVar = document.getElementById('whiteCount');
		var redResult = (result[1] + 0) / 10;
		var orangeResult = (result[2] + 0) / 10;
		var yellowResult = (result[3] + 0) / 10;
		var greenResult = (result[4] + 0) / 10;
		var blueResult = (result[5] + 0) / 10;
		var tealResult = (result[6] + 0) / 10;
		var purpleResult = (result[7] + 0) / 10;
		var pinkResult = (result[8] + 0) / 10;
		var blackResult = (result[9] + 0) / 10;
		var whiteResult = (result[10] + 0) / 10;
		var currentMsgNum = (result[11] + 0) / 10;
		$(".messagewhite").removeClass("messagewhite");
		document.getElementById("message" + currentMsgNum).classList.add('messagewhite');
		document.getElementById('footer').style.visibility='visible';
		document.getElementById('chatscreen').style.visibility='visible';
		document.getElementById('overlay').style.visibility='hidden';
		redVar.innerHTML = (redResult);
		orangeVar.innerHTML = (orangeResult);
		yellowVar.innerHTML = (yellowResult);
		greenVar.innerHTML = (greenResult);
		blueVar.innerHTML = (blueResult);
		tealVar.innerHTML = (tealResult);
		purpleVar.innerHTML = (purpleResult);
		pinkVar.innerHTML = (pinkResult);
		blackVar.innerHTML = (blackResult);
		whiteVar.innerHTML = (whiteResult);
		//clearInterval(registrationVar);
		}
	});
			myContract.view22({from: account}, (err, result) => {
		var message21address = result[0];
		var message21color = result[1];
		var message21message = (' ' + result[2]);
		var message22address = result[3];
		var message22color = result[4];
		var message22message = (' ' + result[5]);
		var msg21var = document.getElementById('message21');
		var msg22var = document.getElementById('message22');
		var msg21id = document.getElementById('message21id');
		var msg22id = document.getElementById('message22id');
		msg21id.style.color = message21color;
		msg21id.innerHTML = message21address;
		msg21var.innerHTML = message21message;
		msg22id.style.color = message22color;
		msg22id.innerHTML = message22address;
		msg22var.innerHTML = message22message;
		
	});
		myContract.view24({from: account}, (err, result) => {
		var message23address = result[0];
		var message23color = result[1];
		var message23message = (' ' + result[2]);
		var message24address = result[3];
		var message24color = result[4];
		var message24message = (' ' + result[5]);
		var msg23var = document.getElementById('message23');
		var msg24var = document.getElementById('message24');
		var msg23id = document.getElementById('message23id');
		var msg24id = document.getElementById('message24id');
		msg23id.style.color = message23color;
		msg23id.innerHTML = message23address;
		msg23var.innerHTML = message23message;
		msg24id.style.color = message24color;
		msg24id.innerHTML = message24address;
		msg24var.innerHTML = message24message;
		
	});
		myContract.view26({from: account}, (err, result) => {
		var message25address = result[0];
		var message25color = result[1];
		var message25message = (' ' + result[2]);
		var message26address = result[3];
		var message26color = result[4];
		var message26message = (' ' + result[5]);
		var msg25var = document.getElementById('message25');
		var msg26var = document.getElementById('message26');
		var msg25id = document.getElementById('message25id');
		var msg26id = document.getElementById('message26id');
		msg25id.style.color = message25color;
		msg25id.innerHTML = message25address;
		msg25var.innerHTML = message25message;
		msg26id.style.color = message26color;
		msg26id.innerHTML = message26address;
		msg26var.innerHTML = message26message;
		
	});
		myContract.view28({from: account}, (err, result) => {
		var message27address = result[0];
		var message27color = result[1];
		var message27message = (' ' + result[2]);
		var message28address = result[3];
		var message28color = result[4];
		var message28message = (' ' + result[5]);
		var msg27var = document.getElementById('message27');
		var msg28var = document.getElementById('message28');
		var msg27id = document.getElementById('message27id');
		var msg28id = document.getElementById('message28id');
		msg27id.style.color = message27color;
		msg27id.innerHTML = message27address;
		msg27var.innerHTML = message27message;
		msg28id.style.color = message28color;
		msg28id.innerHTML = message28address;
		msg28var.innerHTML = message28message;
		
	});
		myContract.view30({from: account}, (err, result) => {
		var message29address = result[0];
		var message29color = result[1];
		var message29message = (' ' + result[2]);
		var message30address = result[3];
		var message30color = result[4];
		var message30message = (' ' + result[5]);
		var msg29var = document.getElementById('message29');
		var msg30var = document.getElementById('message30');
		var msg29id = document.getElementById('message29id');
		var msg30id = document.getElementById('message30id');
		msg29id.style.color = message29color;
		msg29id.innerHTML = message29address;
		msg29var.innerHTML = message29message;
		msg30id.style.color = message30color;
		msg30id.innerHTML = message30address;
		msg30var.innerHTML = message30message;
		
	});
		myContract.view32({from: account}, (err, result) => {
		var message31address = result[0];
		var message31color = result[1];
		var message31message = (' ' + result[2]);
		var message32address = result[3];
		var message32color = result[4];
		var message32message = (' ' + result[5]);
		var msg31var = document.getElementById('message31');
		var msg32var = document.getElementById('message32');
		var msg31id = document.getElementById('message31id');
		var msg32id = document.getElementById('message32id');
		msg31id.style.color = message31color;
		msg31id.innerHTML = message31address;
		msg31var.innerHTML = message31message;
		msg32id.style.color = message32color;
		msg32id.innerHTML = message32address;
		msg32var.innerHTML = message32message;
		
	});
		myContract.view34({from: account}, (err, result) => {
		var message33address = result[0];
		var message33color = result[1];
		var message33message = (' ' + result[2]);
		var message34address = result[3];
		var message34color = result[4];
		var message34message = (' ' + result[5]);
		var msg33var = document.getElementById('message33');
		var msg34var = document.getElementById('message34');
		var msg33id = document.getElementById('message33id');
		var msg34id = document.getElementById('message34id');
		msg33id.style.color = message33color;
		msg33id.innerHTML = message33address;
		msg33var.innerHTML = message33message;
		msg34id.style.color = message34color;
		msg34id.innerHTML = message34address;
		msg34var.innerHTML = message34message;
		
	});
		myContract.view36({from: account}, (err, result) => {
		var message35address = result[0];
		var message35color = result[1];
		var message35message = (' ' + result[2]);
		var message36address = result[3];
		var message36color = result[4];
		var message36message = (' ' + result[5]);
		var msg35var = document.getElementById('message35');
		var msg36var = document.getElementById('message36');
		var msg35id = document.getElementById('message35id');
		var msg36id = document.getElementById('message36id');
		msg35id.style.color = message35color;
		msg35id.innerHTML = message35address;
		msg35var.innerHTML = message35message;
		msg36id.style.color = message36color;
		msg36id.innerHTML = message36address;
		msg36var.innerHTML = message36message;
		
	});
		myContract.view38({from: account}, (err, result) => {
		var message37address = result[0];
		var message37color = result[1];
		var message37message = (' ' + result[2]);
		var message38address = result[3];
		var message38color = result[4];
		var message38message = (' ' + result[5]);
		var msg37var = document.getElementById('message37');
		var msg38var = document.getElementById('message38');
		var msg37id = document.getElementById('message37id');
		var msg38id = document.getElementById('message38id');
		msg37id.style.color = message37color;
		msg37id.innerHTML = message37address;
		msg37var.innerHTML = message37message;
		msg38id.style.color = message38color;
		msg38id.innerHTML = message38address;
		msg38var.innerHTML = message38message;
		
	});
		myContract.view40({from: account}, (err, result) => {
		var message39address = result[0];
		var message39color = result[1];
		var message39message = (' ' + result[2]);
		var message40address = result[3];
		var message40color = result[4];
		var message40message = (' ' + result[5]);
		var msg39var = document.getElementById('message39');
		var msg40var = document.getElementById('message40');
		var msg39id = document.getElementById('message39id');
		var msg40id = document.getElementById('message40id');
		msg39id.style.color = message39color;
		msg39id.innerHTML = message39address;
		msg39var.innerHTML = message39message;
		msg40id.style.color = message40color;
		msg40id.innerHTML = message40address;
		msg40var.innerHTML = message40message;
		
	});
		myContract.view42({from: account}, (err, result) => {
		var message41address = result[0];
		var message41color = result[1];
		var message41message = (' ' + result[2]);
		var message42address = result[3];
		var message42color = result[4];
		var message42message = (' ' + result[5]);
		var msg41var = document.getElementById('message41');
		var msg42var = document.getElementById('message42');
		var msg41id = document.getElementById('message41id');
		var msg42id = document.getElementById('message42id');
		msg41id.style.color = message41color;
		msg41id.innerHTML = message41address;
		msg41var.innerHTML = message41message;
		msg42id.style.color = message42color;
		msg42id.innerHTML = message42address;
		msg42var.innerHTML = message42message;
		
	});
		myContract.view44({from: account}, (err, result) => {
		var message43address = result[0];
		var message43color = result[1];
		var message43message = (' ' + result[2]);
		var message44address = result[3];
		var message44color = result[4];
		var message44message = (' ' + result[5]);
		var msg43var = document.getElementById('message43');
		var msg44var = document.getElementById('message44');
		var msg43id = document.getElementById('message43id');
		var msg44id = document.getElementById('message44id');
		msg43id.style.color = message43color;
		msg43id.innerHTML = message43address;
		msg43var.innerHTML = message43message;
		msg44id.style.color = message44color;
		msg44id.innerHTML = message44address;
		msg44var.innerHTML = message44message;
		
	});
		myContract.view46({from: account}, (err, result) => {
		var message45address = result[0];
		var message45color = result[1];
		var message45message = (' ' + result[2]);
		var message46address = result[3];
		var message46color = result[4];
		var message46message = (' ' + result[5]);
		var msg45var = document.getElementById('message45');
		var msg46var = document.getElementById('message46');
		var msg45id = document.getElementById('message45id');
		var msg46id = document.getElementById('message46id');
		msg45id.style.color = message45color;
		msg45id.innerHTML = message45address;
		msg45var.innerHTML = message45message;
		msg46id.style.color = message46color;
		msg46id.innerHTML = message46address;
		msg46var.innerHTML = message46message;
		
	});
		myContract.view48({from: account}, (err, result) => {
		var message47address = result[0];
		var message47color = result[1];
		var message47message = (' ' + result[2]);
		var message48address = result[3];
		var message48color = result[4];
		var message48message = (' ' + result[5]);
		var msg47var = document.getElementById('message47');
		var msg48var = document.getElementById('message48');
		var msg47id = document.getElementById('message47id');
		var msg48id = document.getElementById('message48id');
		msg47id.style.color = message47color;
		msg47id.innerHTML = message47address;
		msg47var.innerHTML = message47message;
		msg48id.style.color = message48color;
		msg48id.innerHTML = message48address;
		msg48var.innerHTML = message48message;
		
	});
		myContract.view50({from: account}, (err, result) => {
		var message49address = result[0];
		var message49color = result[1];
		var message49message = (' ' + result[2]);
		var message50address = result[3];
		var message50color = result[4];
		var message50message = (' ' + result[5]);
		var msg49var = document.getElementById('message49');
		var msg50var = document.getElementById('message50');
		var msg49id = document.getElementById('message49id');
		var msg50id = document.getElementById('message50id');
		msg49id.style.color = message49color;
		msg49id.innerHTML = message49address;
		msg49var.innerHTML = message49message;
		msg50id.style.color = message50color;
		msg50id.innerHTML = message50address;
		msg50var.innerHTML = message50message;
		
	});
			myContract.view52({from: account}, (err, result) => {
		var message51address = result[0];
		var message51color = result[1];
		var message51message = (' ' + result[2]);
		var message52address = result[3];
		var message52color = result[4];
		var message52message = (' ' + result[5]);
		var msg51var = document.getElementById('message51');
		var msg52var = document.getElementById('message52');
		var msg51id = document.getElementById('message51id');
		var msg52id = document.getElementById('message52id');
		msg51id.style.color = message51color;
		msg51id.innerHTML = message51address;
		msg51var.innerHTML = message51message;
		msg52id.style.color = message52color;
		msg52id.innerHTML = message52address;
		msg52var.innerHTML = message52message;
		
	});
		myContract.view54({from: account}, (err, result) => {
		var message53address = result[0];
		var message53color = result[1];
		var message53message = (' ' + result[2]);
		var message54address = result[3];
		var message54color = result[4];
		var message54message = (' ' + result[5]);
		var msg53var = document.getElementById('message53');
		var msg54var = document.getElementById('message54');
		var msg53id = document.getElementById('message53id');
		var msg54id = document.getElementById('message54id');
		msg53id.style.color = message53color;
		msg53id.innerHTML = message53address;
		msg53var.innerHTML = message53message;
		msg54id.style.color = message54color;
		msg54id.innerHTML = message54address;
		msg54var.innerHTML = message54message;
		
	});
		myContract.view56({from: account}, (err, result) => {
		var message55address = result[0];
		var message55color = result[1];
		var message55message = (' ' + result[2]);
		var message56address = result[3];
		var message56color = result[4];
		var message56message = (' ' + result[5]);
		var msg55var = document.getElementById('message55');
		var msg56var = document.getElementById('message56');
		var msg55id = document.getElementById('message55id');
		var msg56id = document.getElementById('message56id');
		msg55id.style.color = message55color;
		msg55id.innerHTML = message55address;
		msg55var.innerHTML = message55message;
		msg56id.style.color = message56color;
		msg56id.innerHTML = message56address;
		msg56var.innerHTML = message56message;
		
	});
		myContract.view58({from: account}, (err, result) => {
		var message57address = result[0];
		var message57color = result[1];
		var message57message = (' ' + result[2]);
		var message58address = result[3];
		var message58color = result[4];
		var message58message = (' ' + result[5]);
		var msg57var = document.getElementById('message57');
		var msg58var = document.getElementById('message58');
		var msg57id = document.getElementById('message57id');
		var msg58id = document.getElementById('message58id');
		msg57id.style.color = message57color;
		msg57id.innerHTML = message57address;
		msg57var.innerHTML = message57message;
		msg58id.style.color = message58color;
		msg58id.innerHTML = message58address;
		msg58var.innerHTML = message58message;
		
	});
		myContract.view60({from: account}, (err, result) => {
		var message59address = result[0];
		var message59color = result[1];
		var message59message = (' ' + result[2]);
		var message60address = result[3];
		var message60color = result[4];
		var message60message = (' ' + result[5]);
		var msg59var = document.getElementById('message59');
		var msg60var = document.getElementById('message60');
		var msg59id = document.getElementById('message59id');
		var msg60id = document.getElementById('message60id');
		msg59id.style.color = message59color;
		msg59id.innerHTML = message59address;
		msg59var.innerHTML = message59message;
		msg60id.style.color = message60color;
		msg60id.innerHTML = message60address;
		msg60var.innerHTML = message60message;
		
	});
		myContract.view62({from: account}, (err, result) => {
		var message61address = result[0];
		var message61color = result[1];
		var message61message = (' ' + result[2]);
		var message62address = result[3];
		var message62color = result[4];
		var message62message = (' ' + result[5]);
		var msg61var = document.getElementById('message61');
		var msg62var = document.getElementById('message62');
		var msg61id = document.getElementById('message61id');
		var msg62id = document.getElementById('message62id');
		msg61id.style.color = message61color;
		msg61id.innerHTML = message61address;
		msg61var.innerHTML = message61message;
		msg62id.style.color = message62color;
		msg62id.innerHTML = message62address;
		msg62var.innerHTML = message62message;
		
	});
		myContract.view64({from: account}, (err, result) => {
		var message63address = result[0];
		var message63color = result[1];
		var message63message = (' ' + result[2]);
		var message64address = result[3];
		var message64color = result[4];
		var message64message = (' ' + result[5]);
		var msg63var = document.getElementById('message63');
		var msg64var = document.getElementById('message64');
		var msg63id = document.getElementById('message63id');
		var msg64id = document.getElementById('message64id');
		msg63id.style.color = message63color;
		msg63id.innerHTML = message63address;
		msg63var.innerHTML = message63message;
		msg64id.style.color = message64color;
		msg64id.innerHTML = message64address;
		msg64var.innerHTML = message64message;
		
	});
		myContract.view66({from: account}, (err, result) => {
		var message65address = result[0];
		var message65color = result[1];
		var message65message = (' ' + result[2]);
		var message66address = result[3];
		var message66color = result[4];
		var message66message = (' ' + result[5]);
		var msg65var = document.getElementById('message65');
		var msg66var = document.getElementById('message66');
		var msg65id = document.getElementById('message65id');
		var msg66id = document.getElementById('message66id');
		msg65id.style.color = message65color;
		msg65id.innerHTML = message65address;
		msg65var.innerHTML = message65message;
		msg66id.style.color = message66color;
		msg66id.innerHTML = message66address;
		msg66var.innerHTML = message66message;
		
	});
		myContract.view68({from: account}, (err, result) => {
		var message67address = result[0];
		var message67color = result[1];
		var message67message = (' ' + result[2]);
		var message68address = result[3];
		var message68color = result[4];
		var message68message = (' ' + result[5]);
		var msg67var = document.getElementById('message67');
		var msg68var = document.getElementById('message68');
		var msg67id = document.getElementById('message67id');
		var msg68id = document.getElementById('message68id');
		msg67id.style.color = message67color;
		msg67id.innerHTML = message67address;
		msg67var.innerHTML = message67message;
		msg68id.style.color = message68color;
		msg68id.innerHTML = message68address;
		msg68var.innerHTML = message68message;
		
	});
		myContract.view70({from: account}, (err, result) => {
		var message69address = result[0];
		var message69color = result[1];
		var message69message = (' ' + result[2]);
		var message70address = result[3];
		var message70color = result[4];
		var message70message = (' ' + result[5]);
		var msg69var = document.getElementById('message69');
		var msg70var = document.getElementById('message70');
		var msg69id = document.getElementById('message69id');
		var msg70id = document.getElementById('message70id');
		msg69id.style.color = message69color;
		msg69id.innerHTML = message69address;
		msg69var.innerHTML = message69message;
		msg70id.style.color = message70color;
		msg70id.innerHTML = message70address;
		msg70var.innerHTML = message70message;
		
	});
	}
	
	function pickRed () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorRed({ from: account, value: 2500000000000000 })
	}
	function pickOrange () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorOrange({ from: account, value: 2500000000000000 })
	}
	function pickYellow () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorYellow({ from: account, value: 2500000000000000 })
	}
	function pickGreen () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorGreen({ from: account, value: 2500000000000000 })
	}
	function pickBlue () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorBlue({ from: account, value: 2500000000000000 })
	}
	function pickTeal () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorTeal({ from: account, value: 2500000000000000 })
	}
	function pickPurple () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorPurple({ from: account, value: 2500000000000000 })
	}
	function pickPink () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorPink({ from: account, value: 2500000000000000 })
	}
	function pickBlack () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorBlack({ from: account, value: 2500000000000000 })
	}
	function pickWhite () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.setColorWhite({ from: account, value: 2500000000000000 })
	}
	function chooseRed () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorRed({ from: account, value: 1250000000000000 })
	}
	function chooseOrange () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorOrange({ from: account, value: 1250000000000000 })
	}
	function chooseYellow () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorYellow({ from: account, value: 1250000000000000 })
	}
	function chooseGreen () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorGreen({ from: account, value: 1250000000000000 })
	}
	function chooseBlue () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorBlue({ from: account, value: 1250000000000000 })
	}
	function chooseTeal () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorTeal({ from: account, value: 1250000000000000 })
	}
	function choosePurple () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorPurple({ from: account, value: 1250000000000000 })
	}
	function choosePink () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorPink({ from: account, value: 1250000000000000 })
	}
	function chooseBlack () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorBlack({ from: account, value: 1250000000000000 })
	}
	function chooseWhite () {
		const eth = new Eth(web3.currentProvider)
		const myContract = eth.contract(abi).at(contract_address);
		web3.eth.getAccounts(function(err, accounts) { console.log(accounts); address = accounts.toString(); })
		myContract.changeColorWhite({ from: account, value: 1250000000000000 })
	}