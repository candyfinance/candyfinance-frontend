import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 1000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
	ONE_MINUTE_IN_SECONDS,
	ONE_HOUR_IN_SECONDS,
	ONE_DAY_IN_SECONDS,
	ONE_YEAR_IN_SECONDS,
	ZERO: new BigNumber(0),
	ONE: new BigNumber(1),
	ONES_31: new BigNumber('4294967295'), // 2**32-1
	ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
	ONES_255: new BigNumber(
		'115792089237316195423570985008687907853269984665640564039457584007913129639935',
	), // 2**256-1
	INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
	candy: {
	    56: '0x0885198BbC7D33c20CfF807C0701F3A74d6858b5',
	    97: '0x489161ffa3061dF757A263aaDeea5bBED3592C23'
	},
	masterChef: {
	    56: '0x1095a7AB736910E4364bbb29782b103AFB02CaAc',
	    97: '0xCD067DA2F83B7DEbb441DeF3639280f5a07CA271',
	},
	weth: {
	    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',//wbnb
	    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd'
	},
	wethPrice: { // wbnb price oracle
		56: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',//??
		97: '0xf2e4e3f9b58b3edac88ad11d689a23f3119a782d'
	},
	candyPrice: {
		56: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
		97: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
	}
}


export const supportedBinancePools = [
	{
		pid: 0,
		lpAddresses: {
			56: '0xa6efF4Ca0b754EeB8667e132D6eAde6de9bf0d07',
			97: '0x4AD4328d55E88a622Da98A133C805135f292b5AA'
		},
		tokenAddresses: {
			56: '0x0885198BbC7D33c20CfF807C0701F3A74d6858b5',
			97: '0x489161ffa3061dF757A263aaDeea5bBED3592C23'
		},
		tokenDecimals: 18,
		name: 'CNDY Pancake Pearls',
		symbol: 'CNDY-WBNB Cake-LP',
		tokenSymbol: 'CNDY',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/logo.png',
		allocPoint: 480
	},
   {
		pid: 1,
		lpAddresses: {
			56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
            97: '0x967725CeAAb108942817900387f89a0E13E4F6Aa'
		},
		tokenAddresses: {
			56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Cake Bunny Gummy',
		symbol: 'Cake-WBNB Cake-LP',
		tokenSymbol: 'CAKE',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/cake-bunny-gummy.png',
		allocPoint: 80
	},
		{
		pid: 2,
		lpAddresses: {
			56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
            97: '0x967725CeAAb108942817900387f89a0E13E4F6Aa'
		},
		tokenAddresses: {
			56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Binance Sprinkle Lolly',
		symbol: 'WBNB-BUSD Cake-LP',
		tokenSymbol: 'WBNB',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/binance-sprinkle-lolly.png',
		allocPoint: 80
	},

	{
		pid: 3,
		lpAddresses: {
			56: '0xff17ff314925dff772b71abdff2782bc913b3575',
            97: '0x967725CeAAb108942817900387f89a0E13E4F6Aa'
		},
		tokenAddresses: {
			56: '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'VAI Fraise Tagada',
		symbol: 'VAI-BUSD Cake-LP',
		tokenSymbol: 'VAI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/vai-fraise-tagada.png',
		allocPoint: 60
	},
	{
		pid: 4,
		lpAddresses: {
			56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
			97: '0xC0782D71DfcB740f80FC59e1110CdeAe1c28E46a'
		},
		tokenAddresses: {
			56: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
			97: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867'
		},
		tokenDecimals: 18,
		name: 'DAI Bon Bon',
		symbol: 'DAI-BUSD Cake-LP',
		tokenSymbol: 'DAI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/dai-bon-bons.png',
		allocPoint: 40
	},
	{
		pid: 5,
		lpAddresses: {
			56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'BTCB Dubble Candy',
		symbol: 'BTCB-WBNB Cake-LP',
		tokenSymbol: 'BTCB',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/btcb-dubble-candy.png',
		allocPoint: 20
	},
	{
		pid: 6,
		lpAddresses: {
			56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Ether Candy Drop',
		symbol: 'ETH-WBNB Cake-LP',
		tokenSymbol: 'ETH',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/eth-candy-drop.png',
		allocPoint: 20
	} ,
	{
		pid: 7,
		lpAddresses: {
			56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Polkadot Candy Necklace',
		symbol: 'DOT-WBNB Cake-LP',
		tokenSymbol: 'DOT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/polkadot-candy-necklace.png',
		allocPoint: 20
	},
	{
		pid: 8,
		lpAddresses: {
			56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56',
			 97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xa184088a740c695E156F91f5cC086a06bb78b827',
			 97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Autofarm Gummy Bear',
		symbol: 'AUTO-WBNB Cake-LP',
		tokenSymbol: 'AUTO',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/autofarm-gummy-bear.png',
		allocPoint: 20
	},
	{
		pid: 9,
		lpAddresses: {
			56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
			97: '0x72b16D36F0ED20bd7c8a7cE2C5Bb82346D6FCfA7'
		},
		tokenAddresses: {
			56: '0x55d398326f99059fF775485246999027B3197955',
			97: '0xD20Cc80E332C79f9D5Dd90ffde30BDD14DcE9153'
		},
		tokenDecimals: 18,
		name: 'Tether Bite Size',
		symbol: 'USDT-WBNB Cake-LP',
		tokenSymbol: 'USDT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/tether-bite-size.png',
		allocPoint: 20
	},
	{
		pid: 10,
		lpAddresses: {
			56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Chainlink Starfish Candy',
		symbol: 'WBNB-LINK Cake-LP',
		tokenSymbol: 'LINK',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/chainlink-starfish-candy.png',
		allocPoint: 20
	},{
		pid: 11,
		lpAddresses: {
			56: '0x4269e7f43a63cea1ad7707be565a94a9189967e9',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Uniswap Caramel Taffy',
		symbol: 'WBNB-UNI Cake-LP',
		tokenSymbol: 'UNI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/uni-caramel-candy.png',
		allocPoint: 20
	},{
		pid: 12,
		lpAddresses: {
			56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'BAND Shell Jawbreaker',
		symbol: 'BAND-WBNB Cake-LP',
		tokenSymbol: 'BAND',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/band-shell-jawbreaker.png',
		allocPoint: 40
	},{
		pid: 13,
		lpAddresses: {
			56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'SafePal Sour Worm',
		symbol: 'WBNB-SFP Cake-LP',
		tokenSymbol: 'SFP',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/safepal-sour-worm.png',
		allocPoint: 40
	},
	{
		pid: 14,
		lpAddresses: {
			56: '0xc5b0d73a7c0e4eaf66babf7ee16a2096447f7ad6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'bDollar Dilly Dally', //update
		symbol: 'BDO-BUSD Cake-LP',
		tokenSymbol: 'BDO',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/busd-dilly-dally.png',
		allocPoint: 20
	},
	{
		pid: 15,
		lpAddresses: {
			56: '0xd1f12370b2ba1c79838337648f820a87edf5e1e6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'UST Seaweed Candy', //update
		symbol: 'UST-BUSD Cake-LP',
		tokenSymbol: 'UST',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/ust-seaweed-candy.png',
		allocPoint: 20
	},
	{
		pid: 16,
		lpAddresses: {
			56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Cardano Candy Apple',
		symbol: 'ADA-WBNB Cake-LP',
		tokenSymbol: 'ADA',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/cardano-candy-apple.png',
		allocPoint: 40
	},{
		pid: 17,
		lpAddresses: {
			56: '0x8fbd89b44403b6da70737a02bfde39685bfe47bb',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x8b303d5BbfBbf46F1a4d9741E491e06986894e18',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'WOOP Lollipop Picnic',
		symbol: 'WOOP-WBNB Cake-LP',
		tokenSymbol: 'WOOP',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/woop-lollipop-picnic.png',
		allocPoint: 20
	},{
		pid: 18,
		lpAddresses: {
			56: '0x3763a3263ceaca5e7cc1bc22a43920bad9f743cd',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Fuel Rocket Candy',
		symbol: 'Fuel-WBNB Cake-LP',
		tokenSymbol: 'Fuel',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/fuel-rocket-candy.png',
		allocPoint: 10
	},{
		pid: 19,
		lpAddresses: {
			56: '0x68ff2ca47d27db5ac0b5c46587645835dd51d3c1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'YFI Zaotang',
		symbol: 'YFI-WBNB Cake-LP',
		tokenSymbol: 'YFI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/yfi-zaotang.png',
		allocPoint: 40
	},{
		pid: 20,
		lpAddresses: {
			56: '0x03ff6c83226cdb10c7a42a2c54c67d63a135ab69',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'UST Old Dominion',
		symbol: 'UST-WBNB Cake-LP',
		tokenSymbol: 'UST',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/ust-old-dominion.png',
		allocPoint: 40
	},{
		pid: 21,
		lpAddresses: {
			56: '0x58b58cab6c5cf158f63a2390b817710826d116d0',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'REEF Cola Cuba Gummy',
		symbol: 'WBNB-REEF Cake-LP',
		tokenSymbol: 'REEF',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/reef-cola-cuba-libre.png',
		allocPoint: 40
	},
	{
		pid: 22,
		lpAddresses: {
			56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Ripple Orange Gumdrop',
		symbol: 'XRP-WBNB Cake-LP',
		tokenSymbol: 'XRP',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/xrp-orange-gummy.png',
		allocPoint: 20
	},{
		pid: 23,
		lpAddresses: {
			56: '0x610e7a287c27dffcac0f0a94f547cc1b770cf483',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Trust Peach Blossom',
		symbol: 'TWT-WBNB Cake-LP',
		tokenSymbol: 'TWT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/trust-peach-blossom.png',
		allocPoint: 20
	},{
		pid: 24,
		lpAddresses: {
			56: '0x41182c32f854dd97ba0e0b1816022e0acb2fc0bb',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Venus Choco Mountain',
		symbol: 'WBNB-XVS Cake-LP',
		tokenSymbol: 'XVS',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/venus-chocolate-mountains.png',
		allocPoint: 40
	}, {
		pid: 25,
		lpAddresses: {
			56: '0x7a34bd64d18e44cfde3ef4b81b87baf3eb3315b6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'INJ Banana Sweetheart',
		symbol: 'INJ-WBNB Cake-LP',
		tokenSymbol: 'INJ',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/inj-banana-sweetheart.png',
		allocPoint: 20
	},{
		pid: 26,
		lpAddresses: {
			56: '0x60bb03d1010b99ceadd0dd209b64bc8bd83da161',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Litentry Cute Octopus',
		symbol: 'LIT-WBNB Cake-LP',
		tokenSymbol: 'LIT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/litentry-sweet-octopus.png',
		allocPoint: 40
	},
	{
		pid: 27,
		lpAddresses: {
			56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'BSCX Pineapple Gummy',
		symbol: 'BSCX-WBNB Cake-LP',
		tokenSymbol: 'BSCX',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/bscx-pineapple-gummy.png',
		allocPoint: 10
	},{
		pid: 28,
		lpAddresses: {
			56: '0x4e0f3385d932f7179dee045369286ffa6b03d887',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'ALPHA Lemonhead Drop',
		symbol: 'ALPHA-WBNB Cake-LP',
		tokenSymbol: 'ALPHA',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/alpha-lemonhead-surprise.png',
		allocPoint: 10
	},{
		pid: 29,
		lpAddresses: {
			56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'bDollar Candy Corn',
		symbol: 'BDO-WBNB Cake-LP',
		tokenSymbol: 'BDO',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/bdollar-candy-corn.png',
		allocPoint: 20
	},
{
		pid: 30,
		lpAddresses: {
			56: '0x752e713fb70e3fa1ac08bcf34485f14a986956c4',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'SXP Love Lollipop',
		symbol: 'SXP-WBNB Cake-LP',
		tokenSymbol: 'SXP',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/sxp-love-lollipop.png',
		allocPoint: 20
	},
	{
		pid: 31,
		lpAddresses: {
			56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Litecoin Gummy Worm',
		symbol: 'LTC-WBNB Cake-LP',
		tokenSymbol: 'LTC',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/litecoin-gummy-worm.png',
		allocPoint: 20
	}, {
		pid: 32,
		lpAddresses: {
			56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'EOS Clown Fish Candy',
		symbol: 'EOS-WBNB Cake-LP',
		tokenSymbol: 'EOS',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/eos-clown-fish-candy.png',
		allocPoint: 40
	},{
		pid: 33,
		lpAddresses: {
			56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Helmet Jelly Bean',
		symbol: 'Helmet-WBNB Cake-LP',
		tokenSymbol: 'Helmet',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/helmet-jelly-beans.png',
		allocPoint: 20
	},{
		pid: 34,
		lpAddresses: {
			56: '0x54edd846db17f43b6e43296134ecd96284671e81',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Bitcoin Cash Lollipop',
		symbol: 'BCH-WBNB Cake-LP',
		tokenSymbol: 'BCH',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/bitcoin-cash-lollipop.png',
		allocPoint: 20
	}, {
		pid: 35,
		lpAddresses: {
			56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x541E619858737031A1244A5d0Cd47E5ef480342c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Soteria Snail Gummy',
		symbol: 'wSOTE-WBNB Cake-LP',
		tokenSymbol: 'wSOTE',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/soteria-snail-gummy.png',
		allocPoint: 20
	},{
		pid: 36,
		lpAddresses: {
			56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Filecoin Brain Lolly',
		symbol: 'FIL-WBNB Cake-LP',
		tokenSymbol: 'FIL',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/filecoin-brain-lolly.png',
		allocPoint: 20
	},{
		pid: 37,
		lpAddresses: {
			56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 6,
		name: 'Hard Happy Nikukyu',
		symbol: 'WBNB-HARD Cake-LP',
		tokenSymbol: 'HARD',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/hard-happy-nikukyu.png',
		allocPoint: 40
	},{
		pid: 38,
		lpAddresses: {
			56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Frontier Clown Caramel',
		symbol: 'FRONT-WBNB Cake-LP',
		tokenSymbol: 'FRONT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/frontier-clown-caramel.png',
		allocPoint: 20
	},{
		pid: 39,
		lpAddresses: {
			56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Elrond Grape Licorice',
		symbol: 'WBNB-EGLD Cake-LP',
		tokenSymbol: 'EGLD',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/elrond-grape-licorice.png',
		allocPoint: 40
	},{
		pid: 40,
		lpAddresses: {
			56: '0x91589786d36fee5b27a5539cfe638a5fc9834665',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x78650B139471520656b9E7aA7A5e9276814a38e9',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'BTC Marzipan Bonbon',
		symbol: 'BTCST-WBNB Cake-LP',
		tokenSymbol: 'BTCST',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/btch-marzipan-bonbon.png',
		allocPoint: 20
	},{
		pid: 41,
		lpAddresses: {
			56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x72fAa679E1008Ad8382959FF48E392042A8b06f7',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Alliance Wonka Exception',
		symbol: 'bALBT-WBNB Cake-LP',
		tokenSymbol: 'bALBT',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/alliance-wonka.png',
		allocPoint: 20
	},{
		pid: 42,
		lpAddresses: {
			56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 9,
		name: 'Ditto Melon Sweet Sun',
		symbol: 'DITTO-WBNB Cake-LP',
		tokenSymbol: 'DITTO',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/ditto-melon-milk-candy.png',
		allocPoint: 20
	},{
		pid: 43,
		lpAddresses: {
			56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x0Eb3a705fc54725037CC9e008bDede697f62F335',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Cosmos Max Cooper',
		symbol: 'ATOM-WBNB Cake-LP',
		tokenSymbol: 'ATOM',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/cosmos-max-cooper.png',
		allocPoint: 40
	},{
		pid: 44,
		lpAddresses: {
			56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x16939ef78684453bfDFb47825F8a5F714f12623a',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Tezos Watermelon Pocky',
		symbol: 'XTZ-WBNB Cake-LP',
		tokenSymbol: 'EGLD',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/tezos-watermelon-pocky.png',
		allocPoint: 40
	},{
		pid: 45,
		lpAddresses: {
			56: '0x7bb89460599dbf32ee3aa50798bbceae2a5f7f6a',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Bunny Jellyfish Gummy',
		symbol: 'WBNB-BUNNY Cake-LP',
		tokenSymbol: 'BUNNY',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/bunny-jellyfish.png',
		allocPoint: 20
	},{
		pid: 46,
		lpAddresses: {
			56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xdFF8cb622790b7F92686c722b02CaB55592f152C',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Tenet Cinnamon Button',
		symbol: 'WBNB-TEN Cake-LP',
		tokenSymbol: 'TEN',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/tenet-ordinary-candy.png',
		allocPoint: 20
	},{
		pid: 47,
		lpAddresses: {
			56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 6,
		name: 'Hedget Carrot Jelly',
		symbol: 'WBNB-HGET Cake-LP',
		tokenSymbol: 'HGET',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/hedget-carrot-jelly.png',
		allocPoint: 40
	},{
		pid: 48,
		lpAddresses: {
			56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Swirge Gummy Burger',
		symbol: 'WBNB-SWGb Cake-LP',
		tokenSymbol: 'SWGb',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/swirge-gummy-burger.png',
		allocPoint: 40
	},
	{
		pid: 49,
		lpAddresses: {
			56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x7F70642d88cf1C4a3a7abb072B53B929b653edA5',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'YFII Gummy Bear',
		symbol: 'YFII-WBNB Cake-LP',
		tokenSymbol: 'YFII',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/yf2-gummy-bear.png',
		allocPoint: 20
	}, {
		pid: 50,
		lpAddresses: {
			56: '0x2366ec9ddd1eb27506fa2ed48da8f2d9e99ed3c7',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x4197C6EF3879a08cD51e5560da5064B773aa1d29',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'ACryptoS Tootsie Pop',
		symbol: 'ACS-WBNB Cake-LP',
		tokenSymbol: 'SWGb',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/acrypto-tootsie-pop.png',
		allocPoint: 10
	},{
		pid: 51,
		lpAddresses: {
			56: '0xc8fcba816ef9b0c5bc03d9178cfcc7ef785b4f2f',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x849233FF1aea15D80EF658B2871664C9Ca994063',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Soak Bottled Candy',
		symbol: 'SOAK-WBNB Cake-LP',
		tokenSymbol: 'SOAK',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/soak-bottled-candy.png',
		allocPoint: 20
	},{
		pid: 52,
		lpAddresses: {
			56: '0x698aa347d65abebb52901163f65b77c4ce441939',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x5cd50Aae14E14B3fdF3fF13c7A40e8cf5ae8b0A5',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'zSeed Confetti Pop',
		symbol: 'zSEED-WBNB Cake-LP',
		tokenSymbol: 'zSEED',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/zseed-confetti-pop.png',
		allocPoint: 10
	},{
		pid: 53,
		lpAddresses: {
			56: '0x7793870484647a7278907498ec504879d6971eab',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 6,
		name: 'Certik Bear Lollipop',
		symbol: 'CTK-WBNB Cake-LP',
		tokenSymbol: 'CTK',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/certik-bear-lollipop.png',
		allocPoint: 20
	}, {
		pid: 54,
		lpAddresses: {
			56: '0x45a9e8d48bc560416008d122c9437927fed50e7d',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Bearn Ghost Gummy',
		symbol: 'BFI-WBNB Cake-LP',
		tokenSymbol: 'BFI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/bearn-ghost-gummy.png',
		allocPoint: 20
	},{
		pid: 55,
		lpAddresses: {
			56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Goose Golden Grinch',
		symbol: 'WBNB-EGG Cake-LP',
		tokenSymbol: 'EGG',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/goose-golden-grinch.png',
		allocPoint: 10
	},{
		pid: 56,
		lpAddresses: {
			56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xC40C9A843E1c6D01b7578284a9028854f6683b1B',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 2,
		name: 'Juventus Sugarfina',
		symbol: 'WBNB-JUV Cake-LP',
		tokenSymbol: 'JUV',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/juventus-sugarfina.png',
		allocPoint: 40
	},{
		pid: 57,
		lpAddresses: {
			56: '0x25fd42d82d5c238ee7aa277261aa6ca5bdfe5cd4',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Kebab Blow Pop',
		symbol: 'KEBAB-WBNB Cake-LP',
		tokenSymbol: 'KEBAB',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/kebap-blow-pop.png',
		allocPoint: 20
	},
	{
		pid: 58,
		lpAddresses: {
			56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 2,
		name: 'Saint-Germain Carambar',
		symbol: 'WBNB-PSG Cake-LP',
		tokenSymbol: 'PSG',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/paris-carambar.png',
		allocPoint: 40
	},{
		pid: 59,
		lpAddresses: {
			56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x25E9d05365c867E59C1904E7463Af9F312296f9E',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 2,
		name: 'Madrid Ribbon Candy',
		symbol: 'ATM-WBNB Cake-LP',
		tokenSymbol: 'ATM',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/adm-bow-tie.png',
		allocPoint: 40
	},
	{
		pid: 60,
		lpAddresses: {
			56: '0xd6b900d5308356317299dafe303e661271aa12f1',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x80D5f92C2c8C682070C95495313dDB680B267320',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 2,
		name: 'Roma Mister Nice Guy',
		symbol: 'ASR-WBNB Cake-LP',
		tokenSymbol: 'ASR',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/roma-mr-nice-guy.png',
		allocPoint: 40
	},{
		pid: 61,
		lpAddresses: {
			56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 2,
		name: 'OG Mushroom Gummy',
		symbol: 'WBNB-OG Cake-LP',
		tokenSymbol: 'OG',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/og-mushroom-gummy.png',
		allocPoint: 20
	},
	{
		pid: 62,
		lpAddresses: {
			56: '0xbcbf0c95c94798ffef0e71a087a7e98f29d5c0ee',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x8C784C49097Dcc637b93232e15810D53871992BF',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'MSC Frankenstein Sucker',
		symbol: 'MSC-BUSD Cake-LP',
		tokenSymbol: 'MSC',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/msc-frankenstein-candy.png',
		allocPoint: 10
	},{
		pid: 63,
		lpAddresses: {
			56: '0xd132d2c24f29ee8abb64a66559d1b7aa627bd7fd',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Beefy Piranha Gummy',
		symbol: 'WBNB-BIFI Cake-LP',
		tokenSymbol: 'BIFI',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/beefy-piranha-gummy.png',
		allocPoint: 20
	},{
		pid: 64,
		lpAddresses: {
			56: '0x0173b1d0f9b0485f309ca7f71a3754cad177a1ed',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x4B6e4c8eA6a0877D65d768bEB4DF50E90f62F76c',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'EKEY New Year Solitude',
		symbol: 'EKEY-WBNB Cake-LP',
		tokenSymbol: 'EKEY',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/ekey-bit-of-christmas.png',
		allocPoint: 10
	},{
		pid: 65,
		lpAddresses: {
			56: '0x01ffd4b8de49442ab3ef755cc6bb57deeb6b871a',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x86ac8a05Cc4eEd2BEa32D271dE50e2A3d129b6B6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 9,
		name: 'VAPOR Diamond Candy',
		symbol: 'VAPOR-WBNB Cake-LP',
		tokenSymbol: 'VAPOR',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/vapor-diamond-candy.png',
		allocPoint: 10
	},
	{
		pid: 66,
		lpAddresses: {
			56: '0x23bd254977db4897ca96ac36cbd728133b6df035',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xcdAd3683335a4a96d2c437Dd4513b061E4AEc4ff',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Pokeball Gummi Frog',
		symbol: 'WBNB-POKE Cake-LP',
		tokenSymbol: 'POKE',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/pokeball-gummi-frog.png',
		allocPoint: 10
	},
    {
		pid: 67,
		lpAddresses: {
			56: '0x70e882efa9bea28262d4873e65d5f65e9b2baba6',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xa86d305A36cDB815af991834B46aD3d7FbB38523',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 8,
		name: 'BR34P Hated Brocolli',
		symbol: 'BR34P-WBNB Cake-LP',
		tokenSymbol: 'BR34P',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/br34-hated-brocolli.png',
		allocPoint: 20
	},
	{
		pid: 68,
		lpAddresses: {
			56: '0x078113f736255ad4254838ef8fb804bfdb2cf945',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x37ac4d6140e54304d77437a5c11924f61a2d976f',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'SFUEL Laffy Taffy',
		symbol: 'SFUEL-WBNB Cake-LP',
		tokenSymbol: 'bSRK',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/sparkpoint-laffy-taffy.png',
		allocPoint: 20
	},
	{
		pid: 69,
		lpAddresses: {
			56: '0xc1a37db3ac15d6925af08fadedac5d756affa98d',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Absorber Cotton Candy',
		symbol: 'ABS-WBNB Cake-LP',
		tokenSymbol: 'ABS',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/absorber-cotton-candy.png',
		allocPoint: 20
	},{
		pid: 70,
		lpAddresses: {
			56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0x44754455564474A89358B2C2265883DF993b12F0',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Zeroswap Little Birdie',
		symbol: 'ZEE-WBNB Cake-LP',
		tokenSymbol: 'ZEE',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/zeroswap-little-birdie.png',
		allocPoint: 10
	},{
		pid: 71,
		lpAddresses: {
			56: '0x5e3cd27f36932bc0314ac4e2510585798c34a2fc',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenAddresses: {
			56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
            97: '0x9af18AFC5780f5f144530BF82EBa46BAb6938425'
		},
		tokenDecimals: 18,
		name: 'Berry Jelly Lollibean',
		symbol: 'WBNB-BRY Cake-LP',
		tokenSymbol: 'BRY',
        poolType: 'pancake',
		chainType: 'binance',
		icon: '/berry-jelly-belly-lollibeans.png',
		allocPoint: 40
	}
]

