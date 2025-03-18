// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Configures a Frontegg allowed origin.
 */
export class AllowedOrigin extends pulumi.CustomResource {
    /**
     * Get an existing AllowedOrigin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AllowedOriginState, opts?: pulumi.CustomResourceOptions): AllowedOrigin {
        return new AllowedOrigin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'frontegg:index/allowedOrigin:AllowedOrigin';

    /**
     * Returns true if the given object is an instance of AllowedOrigin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AllowedOrigin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AllowedOrigin.__pulumiType;
    }

    /**
     * The allowed origin URI.
     */
    public readonly allowedOrigin!: pulumi.Output<string>;

    /**
     * Create a AllowedOrigin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AllowedOriginArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AllowedOriginArgs | AllowedOriginState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AllowedOriginState | undefined;
            resourceInputs["allowedOrigin"] = state ? state.allowedOrigin : undefined;
        } else {
            const args = argsOrState as AllowedOriginArgs | undefined;
            if ((!args || args.allowedOrigin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'allowedOrigin'");
            }
            resourceInputs["allowedOrigin"] = args ? args.allowedOrigin : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AllowedOrigin.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AllowedOrigin resources.
 */
export interface AllowedOriginState {
    /**
     * The allowed origin URI.
     */
    allowedOrigin?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AllowedOrigin resource.
 */
export interface AllowedOriginArgs {
    /**
     * The allowed origin URI.
     */
    allowedOrigin: pulumi.Input<string>;
}
