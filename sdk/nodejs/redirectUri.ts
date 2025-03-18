// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Configures a Frontegg Redirect URI.
 */
export class RedirectUri extends pulumi.CustomResource {
    /**
     * Get an existing RedirectUri resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RedirectUriState, opts?: pulumi.CustomResourceOptions): RedirectUri {
        return new RedirectUri(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'frontegg:index/redirectUri:RedirectUri';

    /**
     * Returns true if the given object is an instance of RedirectUri.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RedirectUri {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RedirectUri.__pulumiType;
    }

    /**
     * The redirect URI key.
     */
    public /*out*/ readonly key!: pulumi.Output<string>;
    /**
     * The redirect URI.
     */
    public readonly redirectUri!: pulumi.Output<string>;

    /**
     * Create a RedirectUri resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedirectUriArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RedirectUriArgs | RedirectUriState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RedirectUriState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["redirectUri"] = state ? state.redirectUri : undefined;
        } else {
            const args = argsOrState as RedirectUriArgs | undefined;
            if ((!args || args.redirectUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'redirectUri'");
            }
            resourceInputs["redirectUri"] = args ? args.redirectUri : undefined;
            resourceInputs["key"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RedirectUri.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RedirectUri resources.
 */
export interface RedirectUriState {
    /**
     * The redirect URI key.
     */
    key?: pulumi.Input<string>;
    /**
     * The redirect URI.
     */
    redirectUri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RedirectUri resource.
 */
export interface RedirectUriArgs {
    /**
     * The redirect URI.
     */
    redirectUri: pulumi.Input<string>;
}
