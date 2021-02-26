import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import BrandProvider from '@osui/brand-provider';
import Pagination from '@osui/pagination';

export default {
    title: '导航/Pagination 分页',
};

export const Demo = () => {
    function onChange(val) {
        console.log(val);
    }

    return (
        <div style={{padding: 30}}>
            <BrandProvider brand="icloud">
                <ConfigProvider locale={zhCN}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                    <br />
                    <Pagination size="small" total={50} />
                    <br />
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
                </ConfigProvider>
            </BrandProvider>
        </div>);
};
