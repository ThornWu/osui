import React from 'react';
import Space from '@osui/space';
import Divider from '@osui/divider';
import InputNumber from '@osui/input-number';

export default {
    title: '通过验收/InputNumber 数字输入框',
    component: InputNumber,
};

export const Demo = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <br />
            <br />
            <Divider orientation="left">禁用样式</Divider>
            <InputNumber disabled min={1} max={10} defaultValue={3} onChange={onChange} />
        </>
    );
};

export const Size = () => {
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <Space>
            <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
            <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
        </Space>
    );
};
