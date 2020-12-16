import React from 'react';
import {Divider} from 'antd';
import {IconAdd} from '@osui/icons';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import Tag from '@osui/tag';

export default {
    title: '待验收/Tag 标签',
};

export const Demo = () => {
    return (
        <>
            {/* success */}
            <Divider orientation="left">基本</Divider>
            <Tag>标签</Tag>
            <Tag className={'osui-tag-dome-dashed'} icon={<IconAdd style={{marginRight: '4px'}} />}>
                标签
            </Tag>
            <Tag
                closable
                onClose={(e: any) => {
                    e.preventDefault();
                    console.log('Clicked! But prevent default.');
                }}
            >
                标签
            </Tag>
            <br />
            <br />
            <Tag color="blue">标签</Tag>
            <Tag color="green">标签</Tag>
            <Tag color="yellow">标签</Tag>
            <Tag color="red">标签</Tag>
            <br />
            <br />
            <Tag color="blue" solid>标签</Tag>
            <Tag color="green" solid>标签</Tag>
            <Tag color="yellow" solid>标签</Tag>
            <Tag color="red" solid>标签</Tag>
            <br />
            <br />
            <Tag color="blue" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="green" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="yellow" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <Tag color="red" solid icon={<ClockCircleOutlined />}>标签</Tag>
            <br />
            <br />
            <Tag color="blue" round>标签</Tag>
            <Tag color="green" round>标签</Tag>
            <Tag color="yellow" round>标签</Tag>
            <Tag color="red" round>标签</Tag>
        </>
    );
};
