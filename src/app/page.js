"use client";
import React from 'react'
import Switch from './Switch'
import ThreeLevelSwitch from './ThreeLevelSwitch';

export default function page() {
    const [show, setShow] = React.useState(false);
    return (
        <>
            <Switch checked={show} onChange={() => setShow(!show)} />
            {
                show && <div>This is visible now!</div>
            }
            <input type="checkbox" defaultChecked className="toggle toggle-primary" />
            <input type="checkbox" defaultChecked className="toggle toggle-secondary" />
            <input type="checkbox" defaultChecked className="toggle toggle-accent" />
            <input type="checkbox" defaultChecked className="toggle toggle-neutral" />

            <input type="checkbox" defaultChecked className="toggle toggle-info" />
            <input type="checkbox" defaultChecked className="toggle toggle-success" />
            <input type="checkbox" defaultChecked className="toggle toggle-warning" />
            <input type="checkbox" defaultChecked className="toggle toggle-error" />
        </>
    )
}
