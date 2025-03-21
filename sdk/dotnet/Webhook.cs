// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Frontegg
{
    /// <summary>
    /// Configures a Frontegg webhook.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using System.Linq;
    /// using Pulumi;
    /// using Frontegg = Pulumi.Frontegg;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var example = new Frontegg.Webhook("example", new()
    ///     {
    ///         Enabled = true,
    ///         Name = "Example webhook",
    ///         Description = "An example of a webhook",
    ///         Url = "https://example.com/webhook",
    ///         Secret = "example-secret",
    ///         Events = new[]
    ///         {
    ///             "frontegg.user.authenticated",
    ///         },
    ///     });
    /// 
    /// });
    /// ```
    /// </summary>
    [FronteggResourceType("frontegg:index/webhook:Webhook")]
    public partial class Webhook : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The timestamp at which the webhook was created.
        /// </summary>
        [Output("createdAt")]
        public Output<string> CreatedAt { get; private set; } = null!;

        /// <summary>
        /// A human-readable description of the webhook.
        /// </summary>
        [Output("description")]
        public Output<string> Description { get; private set; } = null!;

        /// <summary>
        /// Whether the webhook is enabled.
        /// </summary>
        [Output("enabled")]
        public Output<bool> Enabled { get; private set; } = null!;

        /// <summary>
        /// The names of the events to subscribe to.
        /// </summary>
        [Output("events")]
        public Output<ImmutableArray<string>> Events { get; private set; } = null!;

        /// <summary>
        /// A human-readable name for the webhook.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// A secret to include with the event.
        /// </summary>
        [Output("secret")]
        public Output<string> Secret { get; private set; } = null!;

        /// <summary>
        /// The type of the webhook.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The URL to send events to.
        /// </summary>
        [Output("url")]
        public Output<string> Url { get; private set; } = null!;

        /// <summary>
        /// The ID of the vendor that owns the webhook.
        /// </summary>
        [Output("vendorId")]
        public Output<string> VendorId { get; private set; } = null!;


        /// <summary>
        /// Create a Webhook resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Webhook(string name, WebhookArgs args, CustomResourceOptions? options = null)
            : base("frontegg:index/webhook:Webhook", name, args ?? new WebhookArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Webhook(string name, Input<string> id, WebhookState? state = null, CustomResourceOptions? options = null)
            : base("frontegg:index/webhook:Webhook", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Webhook resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Webhook Get(string name, Input<string> id, WebhookState? state = null, CustomResourceOptions? options = null)
        {
            return new Webhook(name, id, state, options);
        }
    }

    public sealed class WebhookArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// A human-readable description of the webhook.
        /// </summary>
        [Input("description", required: true)]
        public Input<string> Description { get; set; } = null!;

        /// <summary>
        /// Whether the webhook is enabled.
        /// </summary>
        [Input("enabled", required: true)]
        public Input<bool> Enabled { get; set; } = null!;

        [Input("events", required: true)]
        private InputList<string>? _events;

        /// <summary>
        /// The names of the events to subscribe to.
        /// </summary>
        public InputList<string> Events
        {
            get => _events ?? (_events = new InputList<string>());
            set => _events = value;
        }

        /// <summary>
        /// A human-readable name for the webhook.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// A secret to include with the event.
        /// </summary>
        [Input("secret", required: true)]
        public Input<string> Secret { get; set; } = null!;

        /// <summary>
        /// The URL to send events to.
        /// </summary>
        [Input("url", required: true)]
        public Input<string> Url { get; set; } = null!;

        public WebhookArgs()
        {
        }
        public static new WebhookArgs Empty => new WebhookArgs();
    }

    public sealed class WebhookState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The timestamp at which the webhook was created.
        /// </summary>
        [Input("createdAt")]
        public Input<string>? CreatedAt { get; set; }

        /// <summary>
        /// A human-readable description of the webhook.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Whether the webhook is enabled.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("events")]
        private InputList<string>? _events;

        /// <summary>
        /// The names of the events to subscribe to.
        /// </summary>
        public InputList<string> Events
        {
            get => _events ?? (_events = new InputList<string>());
            set => _events = value;
        }

        /// <summary>
        /// A human-readable name for the webhook.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// A secret to include with the event.
        /// </summary>
        [Input("secret")]
        public Input<string>? Secret { get; set; }

        /// <summary>
        /// The type of the webhook.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// The URL to send events to.
        /// </summary>
        [Input("url")]
        public Input<string>? Url { get; set; }

        /// <summary>
        /// The ID of the vendor that owns the webhook.
        /// </summary>
        [Input("vendorId")]
        public Input<string>? VendorId { get; set; }

        public WebhookState()
        {
        }
        public static new WebhookState Empty => new WebhookState();
    }
}
