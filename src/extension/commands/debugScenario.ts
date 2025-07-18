// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import * as assert from "assert";
import * as nls from "vscode-nls";
import * as vscode from "vscode";
import { ErrorHelper } from "../../common/error/errorHelper";
import { InternalErrorCode } from "../../common/error/internalErrorCode";
import { AppLauncher } from "../appLauncher";
import {
    debugConfigurations,
    DEBUG_CONFIGURATION_NAMES,
} from "../debuggingConfiguration/debugConfigTypesAndConstants";
import { Command } from "./util/command";

nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})();
const localize = nls.loadMessageBundle();

const startDebug = (debugConfig: typeof debugConfigurations[string], project: AppLauncher) => {
    assert(
        debugConfig,
        new Error(
            localize(
                "CouldNotFindPredefinedDebugConfig",
                "Couldn't find predefined debugging configuration by name '{0}'",
                debugConfig.name,
            ),
        ),
    );

    debugConfig.isDynamic = true;
    void vscode.debug.startDebugging(project.getWorkspaceFolder(), debugConfig);
};

export class AttachHermesApplication extends Command {
    codeName = "debugScenario.attachHermesApplication";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.ATTACH_TO_HERMES_APPLICATION,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.ATTACH_TO_HERMES_APPLICATION],
            this.project,
        );
    }
}

export class AttachDirectIosExperimental extends Command {
    codeName = "debugScenario.attachDirectIosExperimental";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.ATTACH_TO_DIRECT_IOS_EXPERIMENTAL,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.ATTACH_TO_DIRECT_IOS_EXPERIMENTAL],
            this.project,
        );
    }
}

export class AttachToPackager extends Command {
    codeName = "debugScenario.attachToPackager";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.ATTACH_TO_PACKAGER,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.ATTACH_TO_PACKAGER], this.project);
    }
}

export class DebugAndroid extends Command {
    codeName = "debugScenario.debugAndroid";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_ANDROID,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_ANDROID], this.project);
    }
}

export class DebugIos extends Command {
    codeName = "debugScenario.debugIos";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_IOS,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_IOS], this.project);
    }
}

export class DebugWindows extends Command {
    codeName = "debugScenario.debugWindows";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_WINDOWS,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_WINDOWS], this.project);
    }
}

export class DebugMacos extends Command {
    codeName = "debugScenario.debugMacos";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_MACOS,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_MACOS], this.project);
    }
}

export class DebugInExponent extends Command {
    codeName = "debugScenario.debugInExponent";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT], this.project);
    }
}

export class DebugInHermesExponent extends Command {
    codeName = "debugScenario.debugInHermesExponent";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT_HERMES],
            this.project,
        );
    }
}

export class DebugInExponentWeb extends Command {
    codeName = "debugScenario.debugInExponentWeb";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT_WEB,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_IN_EXPONENT_WEB],
            this.project,
        );
    }
}

export class DebugAndroidHermes extends Command {
    codeName = "debugScenario.debugAndroidHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_ANDROID_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_ANDROID_HERMES],
            this.project,
        );
    }
}

export class DebugDirectIosExperimental extends Command {
    codeName = "debugScenario.debugDirectIosExperimental";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_DIRECT_IOS_EXPERIMENTAL,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_DIRECT_IOS_EXPERIMENTAL],
            this.project,
        );
    }
}

export class DebugIosHermes extends Command {
    codeName = "debugScenario.debugIosHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_IOS_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_IOS_HERMES], this.project);
    }
}

export class DebugMacosHermes extends Command {
    codeName = "debugScenario.debugMacosHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_MACOS_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_MACOS_HERMES], this.project);
    }
}

export class DebugWindowsHermes extends Command {
    codeName = "debugScenario.debugWindowsHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.DEBUG_WINDOWS_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.DEBUG_WINDOWS_HERMES],
            this.project,
        );
    }
}

export class RunAndroid extends Command {
    codeName = "debugScenario.runAndroid";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.RUN_ANDROID,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.RUN_ANDROID], this.project);
    }
}

export class RunIos extends Command {
    codeName = "debugScenario.runIos";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.RUN_IOS,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.RUN_IOS], this.project);
    }
}

export class RunAndroidHermes extends Command {
    codeName = "debugScenario.runAndroidHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.RUN_ANDROID_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.RUN_ANDROID_HERMES], this.project);
    }
}

export class RunIosHermes extends Command {
    codeName = "debugScenario.runIosHermes";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.RUN_IOS_HERMES,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(debugConfigurations[DEBUG_CONFIGURATION_NAMES.RUN_IOS_HERMES], this.project);
    }
}

export class RunDirectIosExperimental extends Command {
    codeName = "debugScenario.runDirectIosExperimental";
    label = "";
    error = ErrorHelper.getInternalError(
        InternalErrorCode.DebuggingCommandFailed,
        DEBUG_CONFIGURATION_NAMES.RUN_DIRECT_IOS_EXPERIMENTAL,
    );

    async baseFn(): Promise<void> {
        assert(this.project);
        startDebug(
            debugConfigurations[DEBUG_CONFIGURATION_NAMES.RUN_DIRECT_IOS_EXPERIMENTAL],
            this.project,
        );
    }
}
