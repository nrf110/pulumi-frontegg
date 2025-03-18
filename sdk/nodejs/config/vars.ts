// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("xyz");

/**
 * A region which should be used.
 */
export declare const region: enums.region.Region | undefined;
Object.defineProperty(exports, "region", {
    get() {
        return __config.getObject<enums.region.Region>("region");
    },
    enumerable: true,
});

