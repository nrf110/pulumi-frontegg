// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Configures a Frontegg webhook.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as frontegg from "@pulumi/frontegg";
 *
 * const example = new frontegg.Webhook("example", {
 *     enabled: true,
 *     name: "Example webhook",
 *     description: "An example of a webhook",
 *     url: "https://example.com/webhook",
 *     secret: "example-secret",
 *     events: ["frontegg.user.authenticated"],
 * });
 * ```
 */
export class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookState, opts?: pulumi.CustomResourceOptions): Webhook {
        return new Webhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'frontegg:index/webhook:Webhook';

    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webhook.__pulumiType;
    }

    /**
     * The timestamp at which the webhook was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * A human-readable description of the webhook.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Whether the webhook is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The names of the events to subscribe to.
     */
    public readonly events!: pulumi.Output<string[]>;
    /**
     * A human-readable name for the webhook.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A secret to include with the event.
     */
    public readonly secret!: pulumi.Output<string>;
    /**
     * The type of the webhook.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The URL to send events to.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * The ID of the vendor that owns the webhook.
     */
    public /*out*/ readonly vendorId!: pulumi.Output<string>;

    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebhookArgs | WebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebhookState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["vendorId"] = state ? state.vendorId : undefined;
        } else {
            const args = argsOrState as WebhookArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.events === undefined) && !opts.urn) {
                throw new Error("Missing required property 'events'");
            }
            if ((!args || args.secret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secret'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendorId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Webhook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Webhook resources.
 */
export interface WebhookState {
    /**
     * The timestamp at which the webhook was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * A human-readable description of the webhook.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the webhook is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The names of the events to subscribe to.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A human-readable name for the webhook.
     */
    name?: pulumi.Input<string>;
    /**
     * A secret to include with the event.
     */
    secret?: pulumi.Input<string>;
    /**
     * The type of the webhook.
     */
    type?: pulumi.Input<string>;
    /**
     * The URL to send events to.
     */
    url?: pulumi.Input<string>;
    /**
     * The ID of the vendor that owns the webhook.
     */
    vendorId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * A human-readable description of the webhook.
     */
    description: pulumi.Input<string>;
    /**
     * Whether the webhook is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The names of the events to subscribe to.
     */
    events: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A human-readable name for the webhook.
     */
    name?: pulumi.Input<string>;
    /**
     * A secret to include with the event.
     */
    secret: pulumi.Input<string>;
    /**
     * The URL to send events to.
     */
    url: pulumi.Input<string>;
}
