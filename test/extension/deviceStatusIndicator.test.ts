// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import assert = require("assert");
import * as vscode from "vscode";
import * as sinon from "sinon";
import { DeviceStatusIndicator } from "../../src/extension/deviceStatusIndicator";

function makeFakeStatusBarItem(): vscode.StatusBarItem {
    return {
        id: "",
        name: "",
        text: "",
        tooltip: undefined,
        color: undefined,
        backgroundColor: undefined,
        command: undefined,
        accessibilityInformation: undefined,
        alignment: vscode.StatusBarAlignment.Left,
        priority: undefined,
        show: sinon.stub(),
        hide: sinon.stub(),
        dispose: sinon.stub(),
    } as unknown as vscode.StatusBarItem;
}

suite("DeviceStatusIndicator", function () {
    suite("extensionContext", function () {
        let createStatusBarItemStub: Sinon.SinonStub;
        let fakeItem: vscode.StatusBarItem;
        setup(() => {
            fakeItem = makeFakeStatusBarItem();
            createStatusBarItemStub = sinon.stub(vscode.window, "createStatusBarItem");
            createStatusBarItemStub.returns(fakeItem);
        });
        teardown(() => {
            const instance = (DeviceStatusIndicator as any).instance;
            if (instance) {
                instance.dispose();
            }
            createStatusBarItemStub.restore();
        });
        test("show should set correct icon and device name in text", function () {
            DeviceStatusIndicator.show("Test Device");
            assert.strictEqual(fakeItem.text, "$(device-mobile) Test Device");
        });
        test("show should set correct tooltip with device name", function () {
            DeviceStatusIndicator.show("Test Device");
            assert.strictEqual(fakeItem.tooltip, "Active debug target: Test Device");
        });
        test("show should call show on the status bar item", function () {
            DeviceStatusIndicator.show("Test Device");
            assert.ok((fakeItem.show as Sinon.SinonStub).calledOnce);
        });
        test("hide should call hide on the status bar item after show", function () {
            DeviceStatusIndicator.show("Test Device");
            DeviceStatusIndicator.hide();
            assert.ok((fakeItem.hide as Sinon.SinonStub).calledOnce);
        });
        test("hide before show should not throw", function () {
            assert.doesNotThrow(() => DeviceStatusIndicator.hide());
        });
        test("show should reuse singleton instance across multiple calls", function () {
            DeviceStatusIndicator.show("Device A");
            DeviceStatusIndicator.show("Device B");
            assert.strictEqual(createStatusBarItemStub.callCount, 1);
            assert.strictEqual(fakeItem.text, "$(device-mobile) Device B");
        });
        test("dispose should clear the singleton instance", function () {
            DeviceStatusIndicator.show("Test Device");
            const instance = (DeviceStatusIndicator as any).instance as DeviceStatusIndicator;
            instance.dispose();
            assert.strictEqual((DeviceStatusIndicator as any).instance, undefined);
        });
    });
});
