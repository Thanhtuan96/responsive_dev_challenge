import React from 'react';

import { SideBar } from '../components/SideBar';

export default {
    title: 'Example/Sidebar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <SideBar {...args} />;
