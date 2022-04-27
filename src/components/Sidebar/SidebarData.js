import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { AiFillAmazonCircle } from "react-icons/ai";
export const SidebarData = [
  {
    title: 'Calcul',
    path: '/calcul',
    icon: <AiFillAmazonCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Amazon Lambda',
        path: '/calcul/lambda',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Instance EC2',
        path: '/calcul/EC2',
        icon: <IoIcons.IoIosPaper />
      }
    
    ]
  },
  {
    title: 'Storage',
    path: '/storage',
    icon: <AiFillAmazonCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Amazon EFS',
        path: '/storage/EFS',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Amazon EBS',
        path: '/storage/EBS',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Amazon S3',
        path: '/storage/S3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Network',
    path: '/network',
    icon: <AiFillAmazonCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Amazon Route53',
        path: '/network/Route53',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'VPC',
        path: '/network/VPC',
        icon: <IoIcons.IoIosPaper />
      }
    
    ]
  },
  {
    title: 'DataBase',
    path: '/database',
    icon: <AiFillAmazonCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'DynamoDB',
        path: '/database/DynamoDB',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'RDS',
        path: '/database/RDS',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },  
];
