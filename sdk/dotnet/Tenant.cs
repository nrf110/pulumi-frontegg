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
    /// Configures a Frontegg tenant.
    /// </summary>
    [FronteggResourceType("frontegg:index/tenant:Tenant")]
    public partial class Tenant : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The application URI for this tenant.
        /// </summary>
        [Output("applicationUri")]
        public Output<string?> ApplicationUri { get; private set; } = null!;

        /// <summary>
        /// A human-readable identifier for the tenant.
        /// </summary>
        [Output("key")]
        public Output<string> Key { get; private set; } = null!;

        /// <summary>
        /// A human-readable name for the tenant.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        [Output("selectedMetadata")]
        public Output<ImmutableDictionary<string, string>?> SelectedMetadata { get; private set; } = null!;


        /// <summary>
        /// Create a Tenant resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Tenant(string name, TenantArgs args, CustomResourceOptions? options = null)
            : base("frontegg:index/tenant:Tenant", name, args ?? new TenantArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Tenant(string name, Input<string> id, TenantState? state = null, CustomResourceOptions? options = null)
            : base("frontegg:index/tenant:Tenant", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Tenant resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Tenant Get(string name, Input<string> id, TenantState? state = null, CustomResourceOptions? options = null)
        {
            return new Tenant(name, id, state, options);
        }
    }

    public sealed class TenantArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The application URI for this tenant.
        /// </summary>
        [Input("applicationUri")]
        public Input<string>? ApplicationUri { get; set; }

        /// <summary>
        /// A human-readable identifier for the tenant.
        /// </summary>
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        /// <summary>
        /// A human-readable name for the tenant.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("selectedMetadata")]
        private InputMap<string>? _selectedMetadata;
        public InputMap<string> SelectedMetadata
        {
            get => _selectedMetadata ?? (_selectedMetadata = new InputMap<string>());
            set => _selectedMetadata = value;
        }

        public TenantArgs()
        {
        }
        public static new TenantArgs Empty => new TenantArgs();
    }

    public sealed class TenantState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The application URI for this tenant.
        /// </summary>
        [Input("applicationUri")]
        public Input<string>? ApplicationUri { get; set; }

        /// <summary>
        /// A human-readable identifier for the tenant.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// A human-readable name for the tenant.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        [Input("selectedMetadata")]
        private InputMap<string>? _selectedMetadata;
        public InputMap<string> SelectedMetadata
        {
            get => _selectedMetadata ?? (_selectedMetadata = new InputMap<string>());
            set => _selectedMetadata = value;
        }

        public TenantState()
        {
        }
        public static new TenantState Empty => new TenantState();
    }
}
