// OS ki fatures keliye
let os= require("os");
console.log(os.arch()); // apn architecture kya hai print karega
console.log(os.platform());
console.log(os.networkInterfaces()); // yeh wifi ki sari information lake dega
console.log(os.cpus());

Output:
x64
win32
{
  'Wi-Fi': [
    {
      address: '2409:4042:e8d:152b:4986:2af0:6338:da27',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'dc:f5:05:9d:db:5d',
      internal: false,
      cidr: '2409:4042:e8d:152b:4986:2af0:6338:da27/64',
      scopeid: 0
    },
    {
      address: '2409:4042:e8d:152b:707f:89ac:6388:ffd9',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: 'dc:f5:05:9d:db:5d',
      internal: false,
      cidr: '2409:4042:e8d:152b:707f:89ac:6388:ffd9/128',
      scopeid: 0
    },
    {
      address: 'fe80::4986:2af0:6338:da27',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'dc:f5:05:9d:db:5d',
      internal: false,
      cidr: 'fe80::4986:2af0:6338:da27/64',
      scopeid: 11
    },
    {
      address: '192.168.163.171',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'dc:f5:05:9d:db:5d',
      internal: false,
      cidr: '192.168.163.171/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
[
  {
    model: 'Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 5069687,
      nice: 0,
      sys: 5918687,
      idle: 54515796,
      irq: 1528265
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 4107843,
      nice: 0,
      sys: 5106156,
      idle: 56289968,
      irq: 1536093
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 5440515,
      nice: 0,
      sys: 4367140,
      idle: 55696312,
      irq: 382218
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-7020U CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 5153546,
      nice: 0,
      sys: 3897781,
      idle: 56452640,
      irq: 175406
    }
  }
]
